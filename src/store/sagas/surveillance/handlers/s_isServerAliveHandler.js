import {call} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../services/Services';

function* s_isServerAliveHandler(action) {
  SystemEventsHandler.onInfo({info: 's_isServerAliveHandler()'});

  try {
    const systemService = Services.get(Services.serviceTypes.SURVEILLANCE);

    yield call(systemService.isServerAlive);
  } catch (e) {
    SystemEventsHandler.onError({
      err: 's_isServerAliveHandler()->ERROR: ' + e,
    });
  }
}

export default s_isServerAliveHandler;
