import {call} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../services/Services';

function* s_getSurveillanceStatusHandler(action) {
  SystemEventsHandler.onInfo({info: 's_getSurveillanceStatusHandler()'});

  try {
    const systemService = Services.get(Services.serviceTypes.SURVEILLANCE);

    yield call(systemService.getSurveillanceStatus);
  } catch (e) {
    SystemEventsHandler.onError({
      err: 's_getSurveillanceStatusHandler()->ERROR: ' + e,
    });
  }
}

export default s_getSurveillanceStatusHandler;
