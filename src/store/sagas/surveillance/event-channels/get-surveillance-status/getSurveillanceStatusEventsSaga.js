import {call, put, take, takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../../utils/common/system-events-handler/SystemEventsHandler';
import createGetSurveillanceStatusChannel from './createGetSurveillanceStatusChannel';

function* getSurveillanceStatusEventsSaga() {
  SystemEventsHandler.onInfo({info: 'getSurveillanceStatusEventsSaga()'});

  const channel = yield call(createGetSurveillanceStatusChannel);

  while (true) {
    const action = yield take(channel);
    // yield put(action);
  }
}

export default getSurveillanceStatusEventsSaga;
