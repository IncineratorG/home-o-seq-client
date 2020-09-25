import {
  GET_CAMERA_IMAGE_BEGIN,
  GET_CAMERA_IMAGE_COMPLETED,
  GET_CAMERA_IMAGE_ERROR,
  GET_CAMERA_IMAGE_RECEIVED,
  GET_CAMERA_IMAGE_TIMEOUT,
} from '../../types/surveillance/surveillanceTypes';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';

const initialState = {
  value: undefined,
  serializedImage: undefined,
};

export const surveillanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMERA_IMAGE_BEGIN: {
      SystemEventsHandler.onInfo({
        info: 'surveillanceReducer->GET_CAMERA_IMAGE_BEGIN',
      });

      return state;
    }

    case GET_CAMERA_IMAGE_RECEIVED: {
      SystemEventsHandler.onInfo({
        info: 'surveillanceReducer->GET_CAMERA_IMAGE_RECEIVED',
      });

      return state;
    }

    case GET_CAMERA_IMAGE_COMPLETED: {
      SystemEventsHandler.onInfo({
        info: 'surveillanceReducer->GET_CAMERA_IMAGE_COMPLETED',
      });

      const {cameraId, serializedImage} = action.payload;

      // SystemEventsHandler.onInfo({
      //   info: 'surveillanceReducer->GET_CAMERA_IMAGE_COMPLETED: ' + cameraId,
      // });
      // SystemEventsHandler.onInfo({
      //   info:
      //     'surveillanceReducer->GET_CAMERA_IMAGE_COMPLETED: ' +
      //     serializedImage.length,
      // });

      return {
        ...state,
        serializedImage,
      };
    }

    case GET_CAMERA_IMAGE_TIMEOUT: {
      SystemEventsHandler.onInfo({
        info: 'surveillanceReducer->GET_CAMERA_IMAGE_TIMEOUT',
      });

      return state;
    }

    case GET_CAMERA_IMAGE_ERROR: {
      SystemEventsHandler.onInfo({
        info: 'surveillanceReducer->GET_CAMERA_IMAGE_ERROR',
      });

      return state;
    }

    default: {
      return state;
    }
  }
};
