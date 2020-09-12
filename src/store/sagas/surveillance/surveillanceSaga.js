import {takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {SEND_TEST_MESSAGE} from '../../types/surveillance/surveillanceTypes';
import s_sendTestMessageHandler from './handlers/s_sendTestMessageHandler';

function* surveillanceSaga() {
  SystemEventsHandler.onInfo({info: 'surveillanceSaga()'});

  yield takeLatest(SEND_TEST_MESSAGE, s_sendTestMessageHandler);
}

export default surveillanceSaga;
