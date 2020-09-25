import {takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {
  GET_ALL_CAMERAS,
  GET_CAMERA_IMAGE,
  GET_SURVEILLANCE_STATUS,
  IS_SERVER_ALIVE,
  SEND_TEST_MESSAGE,
} from '../../types/surveillance/surveillanceTypes';
import s_sendTestMessageHandler from './handlers/s_sendTestMessageHandler';
import s_getSurveillanceStatusHandler from './handlers/s_getSurveillanceStatusHandler';
import s_isServerAliveHandler from './handlers/s_isServerAliveHandler';
import s_getAllCamerasHandler from './handlers/s_getAllCamerasHandler';
import s_getCameraImageHandler from './handlers/s_getCameraImageHandler';

function* surveillanceSaga() {
  SystemEventsHandler.onInfo({info: 'surveillanceSaga()'});

  yield takeLatest(SEND_TEST_MESSAGE, s_sendTestMessageHandler);
  yield takeLatest(GET_SURVEILLANCE_STATUS, s_getSurveillanceStatusHandler);
  yield takeLatest(IS_SERVER_ALIVE, s_isServerAliveHandler);
  yield takeLatest(GET_ALL_CAMERAS, s_getAllCamerasHandler);
  yield takeLatest(GET_CAMERA_IMAGE, s_getCameraImageHandler);
}

export default surveillanceSaga;
