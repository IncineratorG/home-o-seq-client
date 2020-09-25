import {SystemEventsHandler} from '../../../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../../../services/Services';
import SurveillanceServiceEvents from '../../../../../../services/surveillance/data/event-types/SurveillanceServiceEvents';

const isServerAliveEvents = (emit) => {
  const receivedHandler = () => {
    SystemEventsHandler.onInfo({
      info: 'isServerAliveEvents()->receivedHandler',
    });
  };

  const completedHandler = (status) => {
    SystemEventsHandler.onInfo({
      info:
        'isServerAliveEvents()->completedHandler: ' + JSON.stringify(status),
    });
  };

  const errorHandler = (error) => {
    SystemEventsHandler.onInfo({
      info: 'isServerAliveEvents()->errorHandler: ' + JSON.stringify(error),
    });
  };

  const timeoutHandler = () => {
    SystemEventsHandler.onInfo({
      info: 'isServerAliveEvents()->timeoutHandler',
    });
  };

  const surveillanceService = Services.get(Services.serviceTypes.SURVEILLANCE);

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
};

export default isServerAliveEvents;
