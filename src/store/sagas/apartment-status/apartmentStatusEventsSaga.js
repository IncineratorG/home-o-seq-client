import {call, put, take, takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import createApartmentStatusEventsChannel from './eventChannels/createApartmentStatusEventsChannel';

function* apartmentStatusEventsSaga() {
  SystemEventsHandler.onInfo({info: 'apartmentStatusEventsSaga()'});

  const channel = yield call(createApartmentStatusEventsChannel);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default apartmentStatusEventsSaga;
