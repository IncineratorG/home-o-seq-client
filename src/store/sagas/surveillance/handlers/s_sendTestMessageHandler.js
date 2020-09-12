import {call} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../services/Services';

function* s_sendTestMessageHandler(action) {
  SystemEventsHandler.onInfo({info: 's_sendTestMessageHandler()'});

  try {
    const systemService = Services.get(Services.serviceTypes.SURVEILLANCE);

    yield call(systemService.runLongRunningTask);

    SystemEventsHandler.onInfo({
      info: 's_sendTestMessageHandler()->CALL_FINISHED',
    });
  } catch (e) {
    SystemEventsHandler.onError({
      err: 's_sendTestMessageHandler()->ERROR: ' + e,
    });
  }
}

export default s_sendTestMessageHandler;
