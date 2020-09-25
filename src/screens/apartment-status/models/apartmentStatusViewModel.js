import {useDispatch, useSelector} from 'react-redux';

export const useApartmentStatusViewModel = () => {
  const dispatch = useDispatch();

  return {
    data: {},
    setters: {},
    dispatch,
  };
};
