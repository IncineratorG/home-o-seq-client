import {takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {IS_SERVER_ALIVE} from '../../types/apartment-status/apartmentStatusTypes';
import as_isServerAliveHandler from './handlers/as_isServerAliveHandler';

function* apartmentStatusSaga() {
  SystemEventsHandler.onInfo({info: 'apartmentStatusSaga()'});

  yield takeLatest(IS_SERVER_ALIVE, as_isServerAliveHandler);
}

export default apartmentStatusSaga;
