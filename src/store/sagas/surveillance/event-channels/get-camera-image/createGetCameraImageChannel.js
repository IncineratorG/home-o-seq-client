import {call, put, take} from '@redux-saga/core/effects';
import {eventChannel} from 'redux-saga';
import {SystemEventsHandler} from '../../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../../services/Services';
import SurveillanceServiceEvents from '../../../../../services/surveillance/data/event-types/SurveillanceServiceEvents';
import {
  getCameraImageCompletedAction,
  getCameraImageErrorAction,
  getCameraImageReceivedAction,
  getCameraImageTimeoutAction,
} from '../../../../actions/surveillance/surveillanceActions';

function createGetCameraImageChannel() {
  return eventChannel((emit) => {
    const receivedHandler = () => {
      SystemEventsHandler.onInfo({
        info: 'createGetCameraImageChannel()->receivedHandler',
      });

      emit(getCameraImageReceivedAction());
    };

    const completedHandler = (data) => {
      SystemEventsHandler.onInfo({
        info: 'createGetCameraImageChannel()->completedHandler',
      });

      const {cameraId, serializedImage} = data;
      // SystemEventsHandler.onInfo({
      //   info: cameraId + ' - ' + ' - ' + (image === null),
      // });

      emit(getCameraImageCompletedAction({cameraId, serializedImage}));
    };

    const errorHandler = (error) => {
      SystemEventsHandler.onInfo({
        info:
          'createGetCameraImageChannel()->errorHandler: ' +
          JSON.stringify(error),
      });

      emit(getCameraImageErrorAction(error));
    };

    const timeoutHandler = () => {
      SystemEventsHandler.onInfo({
        info: 'createGetCameraImageChannel()->timeoutHandler',
      });

      emit(getCameraImageTimeoutAction());
    };

    const surveillanceService = Services.get(
      Services.serviceTypes.SURVEILLANCE,
    );

    const receivedUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_CAMERA_IMAGE_REQUEST_RECEIVED,
      handler: receivedHandler,
    });

    const completedUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_CAMERA_IMAGE_REQUEST_COMPLETED,
      handler: completedHandler,
    });

    const errorUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_CAMERA_IMAGE_REQUEST_ERROR,
      handler: errorHandler,
    });

    const timeoutUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_CAMERA_IMAGE_REQUEST_TIMEOUT,
      handler: timeoutHandler,
    });

    return () => {
      receivedUnsubscribe();
      completedUnsubscribe();
      errorUnsubscribe();
      timeoutUnsubscribe();
    };
  });
}

export default createGetCameraImageChannel;
