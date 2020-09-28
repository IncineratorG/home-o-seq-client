import {call, put} from '@redux-saga/core/effects';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../services/Services';
import {getApartmentStatusBeginAction} from '../../../actions/apartment-status/apartmentStatusActions';

function* as_getApartmentStatusHandler(action) {
  SystemEventsHandler.onInfo({info: 'as_getApartmentStatusHandler()'});

  yield put(getApartmentStatusBeginAction());

  try {
    const systemService = Services.get(Services.serviceTypes.SURVEILLANCE);

    yield call(systemService.getApartmentStatus);
  } catch (e) {
    SystemEventsHandler.onError({
      err: 'as_getApartmentStatusHandler()->ERROR: ' + e,
    });
  }
}

export default as_getApartmentStatusHandler;
