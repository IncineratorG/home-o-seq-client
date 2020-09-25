import {call, put, take} from '@redux-saga/core/effects';
import {eventChannel} from 'redux-saga';
import isServerAliveEvents from './events/is-server-alive/isServerAliveEvents';

function createApartmentStatusEventsChannel() {
  return eventChannel((emit) => {
    return () => {
      const isServerAliveUnsubscribe = isServerAliveEvents(emit);

      return () => {
        isServerAliveUnsubscribe();
      };
    };
  });
}

export default createApartmentStatusEventsChannel;
