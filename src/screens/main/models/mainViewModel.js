import {useDispatch, useSelector} from 'react-redux';

export const useMainViewModel = () => {
  const dispatch = useDispatch();

  return {
    data: {},
    setters: {},
    dispatch,
  };
};
