import {call, put, take, takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../../utils/common/system-events-handler/SystemEventsHandler';
import createGetCameraImageChannel from './createGetCameraImageChannel';

function* getCameraImageEventsSaga() {
  SystemEventsHandler.onInfo({info: 'getCameraImageEventsSaga()'});

  const channel = yield call(createGetCameraImageChannel);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default getCameraImageEventsSaga;
