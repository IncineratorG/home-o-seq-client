import {call, put, take} from '@redux-saga/core/effects';
import {eventChannel} from 'redux-saga';
import {SystemEventsHandler} from '../../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../../services/Services';
import SurveillanceServiceEvents from '../../../../../services/surveillance/data/event-types/SurveillanceServiceEvents';

function createIsServerAliveChannel() {
  return eventChannel((emit) => {
    const receivedHandler = () => {
      SystemEventsHandler.onInfo({
        info: 'createIsServerAliveChannel()->receivedHandler',
      });
    };

    const completedHandler = (status) => {
      SystemEventsHandler.onInfo({
        info:
          'createIsServerAliveChannel()->completedHandler: ' +
          JSON.stringify(status),
      });
    };

    const errorHandler = (error) => {
      SystemEventsHandler.onInfo({
        info:
          'createIsServerAliveChannel()->errorHandler: ' +
          JSON.stringify(error),
      });
    };

    const timeoutHandler = () => {
      SystemEventsHandler.onInfo({
        info: 'createIsServerAliveChannel()->timeoutHandler',
      });
    };

    const surveillanceService = Services.get(
      Services.serviceTypes.SURVEILLANCE,
    );

    const receivedUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.IS_ALIVE_REQUEST_RECEIVED,
      handler: receivedHandler,
    });

    const completedUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.IS_ALIVE_REQUEST_COMPLETED,
      handler: completedHandler,
    });

    const errorUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.IS_ALIVE_REQUEST_ERROR,
      handler: errorHandler,
    });

    const timeoutUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.IS_ALIVE_REQUEST_TIMEOUT,
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

export default createIsServerAliveChannel;
