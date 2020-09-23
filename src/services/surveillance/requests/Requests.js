import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {GET_SURVEILLANCE_STATUS, IS_ALIVE} from './requestTypes';
import SurveillanceServiceEvents from '../data/event-types/SurveillanceServiceEvents';
import {Responses} from '../responses/Responses';

export class Requests {
  static isAliveRequest({serviceNotifier}) {
    const onReceived = () => {
      serviceNotifier.notify({
        event: SurveillanceServiceEvents.IS_ALIVE_REQUEST_RECEIVED,
        data: {},
      });
    };

    const onCompleted = (data) => {
      serviceNotifier.notify({
        event: SurveillanceServiceEvents.IS_ALIVE_REQUEST_COMPLETED,
        data: Responses.isAliveResponse(data),
      });
    };

    const onError = (error) => {
      serviceNotifier.notify({
        event: SurveillanceServiceEvents.IS_ALIVE_REQUEST_ERROR,
        data: error,
      });
    };

    const onTimeout = () => {
      serviceNotifier.notify({
        event: SurveillanceServiceEvents.IS_ALIVE_REQUEST_TIMEOUT,
        data: {},
      });
    };

    const request = {
      uuid: uuidv4(),
      type: IS_ALIVE,
    };

    return {
      request,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    };
  }

  static getSurveillanceStatusRequest() {
    return {
      uuid: uuidv4(),
      type: GET_SURVEILLANCE_STATUS,
    };
  }
}
