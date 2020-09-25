import {useDispatch, useSelector} from 'react-redux';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';

export const useMainViewModel = () => {
  const dispatch = useDispatch();

  const serializedImage = useSelector(
    (state) => state.surveillance.serializedImage,
  );

  // if (serializedImage) {
  //   SystemEventsHandler.onInfo({
  //     info: 'useMainViewModel(): ' + serializedImage.length,
  //   });
  // } else {
  //   SystemEventsHandler.onInfo({info: 'useMainViewModel(): 0'});
  // }

  // SystemEventsHandler.onInfo({
  //   info:
  //     'useMainViewModel(): ' +
  //     (serializedImage === undefined || serializedImage === null)
  //       ? '0'
  //       : serializedImage.length,
  // });

  return {
    data: {
      serializedImage,
    },
    setters: {},
    dispatch,
  };
};
