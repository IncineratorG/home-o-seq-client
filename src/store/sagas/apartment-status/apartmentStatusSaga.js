import {takeLatest} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {
  GET_APARTMENT_STATUS,
  IS_SERVER_ALIVE,
} from '../../types/apartment-status/apartmentStatusTypes';
import as_isServerAliveHandler from './handlers/as_isServerAliveHandler';
import as_getApartmentStatusHandler from './handlers/as_getApartmentStatusHandler';

function* apartmentStatusSaga() {
  SystemEventsHandler.onInfo({info: 'apartmentStatusSaga()'});

  yield takeLatest(IS_SERVER_ALIVE, as_isServerAliveHandler);
  yield takeLatest(GET_APARTMENT_STATUS, as_getApartmentStatusHandler);
}

export default apartmentStatusSaga;
