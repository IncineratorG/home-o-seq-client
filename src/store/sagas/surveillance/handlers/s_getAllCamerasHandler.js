import {call} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../services/Services';

function* s_getAllCamerasHandler(action) {
  SystemEventsHandler.onInfo({info: 's_getAllCamerasHandler()'});

  try {
    const systemService = Services.get(Services.serviceTypes.SURVEILLANCE);

    yield call(systemService.getAllCameras);
  } catch (e) {
    SystemEventsHandler.onError({
      err: 's_getAllCamerasHandler()->ERROR: ' + e,
    });
  }
}

export default s_getAllCamerasHandler;
