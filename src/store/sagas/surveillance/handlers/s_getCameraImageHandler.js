import {call} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../services/Services';

function* s_getCameraImageHandler(action) {
  SystemEventsHandler.onInfo({info: 's_getCameraImageHandler()'});

  const {cameraId} = action.payload;

  try {
    const systemService = Services.get(Services.serviceTypes.SURVEILLANCE);

    yield call(systemService.getCameraImage, {cameraId});
  } catch (e) {
    SystemEventsHandler.onError({
      err: 's_getCameraImageHandler()->ERROR: ' + e,
    });
  }
}

export default s_getCameraImageHandler;
