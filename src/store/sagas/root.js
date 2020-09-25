import {all, spawn, call} from 'redux-saga/effects';
import {SystemEventsHandler} from '../../utils/common/system-events-handler/SystemEventsHandler';
import surveillanceSaga from './surveillance/surveillanceSaga';
import getSurveillanceStatusEventsSaga from './surveillance/event-channels/get-surveillance-status/getSurveillanceStatusEventsSaga';
import isServerAliveEventsSaga from './surveillance/event-channels/is-server-alive/isServerAliveEventsSaga';
import getAllCamerasEventsSaga from './surveillance/event-channels/get-all-cameras/getAllCamerasEventsSaga';
import getCameraImageEventsSaga from './surveillance/event-channels/get-camera-image/getCameraImageEventsSaga';
import apartmentStatusSaga from './apartment-status/apartmentStatusSaga';

function* rootSaga() {
  const sagas = [
    apartmentStatusSaga,
    // surveillanceSaga,
    // getSurveillanceStatusEventsSaga,
    // isServerAliveEventsSaga,
    // getAllCamerasEventsSaga,
    // getCameraImageEventsSaga,
  ];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            SystemEventsHandler.onError({err: 'rootSaga()->ERROR: ' + e});
          }
        }
      }),
    ),
  );
}

export default rootSaga;
