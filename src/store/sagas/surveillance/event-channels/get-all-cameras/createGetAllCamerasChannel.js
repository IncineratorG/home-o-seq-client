import {call, put, take} from '@redux-saga/core/effects';
import {eventChannel} from 'redux-saga';
import {SystemEventsHandler} from '../../../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../../../services/Services';
import SurveillanceServiceEvents from '../../../../../services/surveillance/data/event-types/SurveillanceServiceEvents';

function createGetAllCamerasChannel() {
  return eventChannel((emit) => {
    const receivedHandler = () => {
      SystemEventsHandler.onInfo({
        info: 'createGetAllCamerasChannel()->receivedHandler',
      });
    };

    const completedHandler = (data) => {
      SystemEventsHandler.onInfo({
        info:
          'createGetAllCamerasChannel()->completedHandler: ' +
          JSON.stringify(data),
      });

      const cameras = data.cameras;
      SystemEventsHandler.onInfo({info: cameras.length});
    };

    const errorHandler = (error) => {
      SystemEventsHandler.onInfo({
        info:
          'createGetAllCamerasChannel()->errorHandler: ' +
          JSON.stringify(error),
      });
    };

    const timeoutHandler = () => {
      SystemEventsHandler.onInfo({
        info: 'createGetAllCamerasChannel()->timeoutHandler',
      });
    };

    const surveillanceService = Services.get(
      Services.serviceTypes.SURVEILLANCE,
    );

    const receivedUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_ALL_CAMERAS_REQUEST_RECEIVED,
      handler: receivedHandler,
    });

    const completedUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_ALL_CAMERAS_REQUEST_COMPLETED,
      handler: completedHandler,
    });

    const errorUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_ALL_CAMERAS_REQUEST_ERROR,
      handler: errorHandler,
    });

    const timeoutUnsubscribe = surveillanceService.subscribe({
      event: SurveillanceServiceEvents.GET_ALL_CAMERAS_REQUEST_ERROR,
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

export default createGetAllCamerasChannel;
