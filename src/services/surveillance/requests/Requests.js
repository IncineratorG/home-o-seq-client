import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {GET_SURVEILLANCE_STATUS} from './requestTypes';

export class Requests {
  static getSurveillanceStatusRequest() {
    return {
      uuid: uuidv4(),
      type: GET_SURVEILLANCE_STATUS,
    };
  }
}
