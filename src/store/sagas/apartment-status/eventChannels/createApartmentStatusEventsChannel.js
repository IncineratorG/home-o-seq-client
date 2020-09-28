import {eventChannel} from 'redux-saga';
import isServerAliveEvents from './events/is-server-alive/isServerAliveEvents';
import getApartmentStatusEvents from './events/get-apartment-status/getApartmentStatusEvents';

function createApartmentStatusEventsChannel() {
  return eventChannel((emit) => {
    const isServerAliveUnsubscribe = isServerAliveEvents(emit);
    const getApartmentStatusUnsubscribe = getApartmentStatusEvents(emit);

    return () => {
      isServerAliveUnsubscribe();
      getApartmentStatusUnsubscribe();
    };
  });
}

export default createApartmentStatusEventsChannel;
