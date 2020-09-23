import {call, put, take, takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../../utils/common/system-events-handler/SystemEventsHandler';
import createGetAllCamerasChannel from './createGetAllCamerasChannel';

function* getAllCamerasEventsSaga() {
  SystemEventsHandler.onInfo({info: 'getAllCamerasEventsSaga()'});

  const channel = yield call(createGetAllCamerasChannel);

  while (true) {
    const action = yield take(channel);
    // yield put(action);
  }
}

export default getAllCamerasEventsSaga;
