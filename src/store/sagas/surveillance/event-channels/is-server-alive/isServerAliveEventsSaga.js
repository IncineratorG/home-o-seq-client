import {call, put, take, takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../../utils/common/system-events-handler/SystemEventsHandler';
import createIsServerAliveChannel from './createIsServerAliveChannel';

function* isServerAliveEventsSaga() {
  SystemEventsHandler.onInfo({info: 'isServerAliveEventsSaga()'});

  const channel = yield call(createIsServerAliveChannel);

  while (true) {
    const action = yield take(channel);
    // yield put(action);
  }
}

export default isServerAliveEventsSaga;
