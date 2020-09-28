import {
  getApartmentStatusAction,
  isServerAliveAction,
} from '../../../store/actions/apartment-status/apartmentStatusActions';

export const apartmentStatusViewController = (model) => {
  const testSend = () => {
    model.dispatch(getApartmentStatusAction());
  };

  return {
    testSend,
  };
};
