import {call, put, take} from '@redux-saga/core/effects';
import {eventChannel} from 'redux-saga';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../services/Services';
import SurveillanceServiceEvents from '../../../../services/surveillance/data/event-types/SurveillanceServiceEvents';

function s_createGetSurveillanceStatusChannel() {
  return eventChannel((emit) => {
    const receivedHandler = () => {
      SystemEventsHandler.onInfo({
        info: 's_createGetSurveillanceStatusChannel()->receivedHandler',
      });
    };

    const completedHandler = (status) => {
      SystemEventsHandler.onInfo({
        info:
          's_createGetSurveillanceStatusChannel()->completedHandler: ' +
          JSON.stringify(status),
      });
    };

    const errorHandler = ({error}) => {
      SystemEventsHandler.onInfo({
        info:
          's_createGetSurveillanceStatusChannel()->errorHandler: ' +
          JSON.stringify(error),
      });
    };

    const timeoutHandler = () => {
      SystemEventsHandler.onInfo({
        info: 's_createGetSurveillanceStatusChannel()->timeoutHandler',
      });
    };

    const surveillanceService = Services.get(
      Services.serviceTypes.SURVEILLANCE,
    );

    const receivedUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_SURVEILLANCE_STATUS_REQUEST_RECEIVED,
      handler: receivedHandler,
    });

    const completedUnsubscribe = surveillanceService.subscribe({
      event:
        SurveillanceServiceEvents.GET_SURVEILLANCE_STATUS_REQUEST_COMPLETED,
      handler: completedHandler,
    });

    const errorUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_SURVEILLANCE_STATUS_REQUEST_ERROR,
      handler: errorHandler,
    });

    const timeoutUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_SURVEILLANCE_STATUS_REQUEST_TIMEOUT,
      handler: timeoutHandler,
    });

    return () => {
      receivedUnsubscribe();
      completedUnsubscribe();
      errorUnsubscribe();
      timeoutUnsubscribe();
    };
  });
}

export default s_createGetSurveillanceStatusChannel;
