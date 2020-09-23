import {takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {
  GET_SURVEILLANCE_STATUS,
  IS_SERVER_ALIVE,
  SEND_TEST_MESSAGE,
} from '../../types/surveillance/surveillanceTypes';
import s_sendTestMessageHandler from './handlers/s_sendTestMessageHandler';
import s_getSurveillanceStatusHandler from './handlers/s_getSurveillanceStatusHandler';
import s_isServerAliveHandler from './handlers/s_isServerAliveHandler';

function* surveillanceSaga() {
  SystemEventsHandler.onInfo({info: 'surveillanceSaga()'});

  yield takeLatest(SEND_TEST_MESSAGE, s_sendTestMessageHandler);
  yield takeLatest(GET_SURVEILLANCE_STATUS, s_getSurveillanceStatusHandler);
  yield takeLatest(IS_SERVER_ALIVE, s_isServerAliveHandler);
}

export default surveillanceSaga;
