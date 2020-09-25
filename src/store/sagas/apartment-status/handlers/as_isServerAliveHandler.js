import {call} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../services/Services';

function* as_isServerAliveHandler(action) {
  SystemEventsHandler.onInfo({info: 'as_isServerAliveHandler()'});

  try {
    const systemService = Services.get(Services.serviceTypes.SURVEILLANCE);

    yield call(systemService.isServerAlive);
  } catch (e) {
    SystemEventsHandler.onError({
      err: 'as_isServerAliveHandler()->ERROR: ' + e,
    });
  }
}

export default as_isServerAliveHandler;
