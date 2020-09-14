import {call, put, take, takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import s_createGetSurveillanceStatusChannel from './event-channels/s_createGetSurveillanceStatusChannel';

function* getSurveillanceStatusEventsSaga() {
  SystemEventsHandler.onInfo({info: 'getSurveillanceStatusEventsSaga()'});

  const channel = yield call(s_createGetSurveillanceStatusChannel);

  while (true) {
    const action = yield take(channel);
    // yield put(action);
  }
}

export default getSurveillanceStatusEventsSaga;
