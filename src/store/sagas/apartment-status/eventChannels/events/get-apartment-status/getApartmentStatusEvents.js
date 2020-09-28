import Services from '../../../../../../services/Services';
import SurveillanceServiceEvents from '../../../../../../services/surveillance/data/event-types/SurveillanceServiceEvents';
import {
  getApartmentStatusCompletedAction,
  getApartmentStatusErrorAction,
  getApartmentStatusReceivedAction,
  getApartmentStatusTimeoutAction,
} from '../../../../../actions/apartment-status/apartmentStatusActions';

const getApartmentStatusEvents = (emit) => {
  const receivedHandler = () => {
    emit(getApartmentStatusReceivedAction());
  };

  const completedHandler = ({cameras}) => {
    emit(getApartmentStatusCompletedAction({cameras}));
  };

  const errorHandler = ({code, description}) => {
    emit(getApartmentStatusErrorAction({code, description}));
  };

  const timeoutHandler = () => {
    emit(getApartmentStatusTimeoutAction());
  };

  const surveillanceService = Services.get(Services.serviceTypes.SURVEILLANCE);

  const receivedUnsubscribe = surveillanceService.subscribe({
    event: SurveillanceServiceEvents.GET_APARTMENT_STATUS_RECEIVED,
    handler: receivedHandler,
  });

  const completedUnsubscribe = surveillanceService.subscribe({
    event: SurveillanceServiceEvents.GET_APARTMENT_STATUS_COMPLETED,
    handler: completedHandler,
  });

  const errorUnsubscribe = surveillanceService.subscribe({
    event: SurveillanceServiceEvents.GET_APARTMENT_STATUS_ERROR,
    handler: errorHandler,
  });

  const timeoutUnsubscribe = surveillanceService.subscribe({
    event: SurveillanceServiceEvents.GET_APARTMENT_STATUS_TIMEOUT,
    handler: timeoutHandler,
  });

  return () => {
    receivedUnsubscribe();
    completedUnsubscribe();
    errorUnsubscribe();
    timeoutUnsubscribe();
  };
};

export default getApartmentStatusEvents;
