import {SystemEventsHandler} from '../../../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../../../services/Services';
import SurveillanceServiceEvents from '../../../../../../services/surveillance/data/event-types/SurveillanceServiceEvents';
import {
  isServerAliveCompletedAction,
  isServerAliveErrorAction,
  isServerAliveReceivedAction,
  isServerAliveTimeoutAction,
} from '../../../../../actions/apartment-status/apartmentStatusActions';

const isServerAliveEvents = (emit) => {
  const receivedHandler = () => {
    emit(isServerAliveReceivedAction());
  };

  const completedHandler = ({isAlive}) => {
    emit(isServerAliveCompletedAction({isAlive}));
  };

  const errorHandler = ({code, description}) => {
    emit(isServerAliveErrorAction({code, description}));
  };

  const timeoutHandler = () => {
    emit(isServerAliveTimeoutAction());
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
