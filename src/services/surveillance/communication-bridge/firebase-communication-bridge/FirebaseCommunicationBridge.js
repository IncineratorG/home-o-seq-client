import database from '@react-native-firebase/database';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import {FirebasePaths} from './firebase-paths/FirebasePaths';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export class FirebaseCommunicationBridge {
  #clientRequestPath;
  #serverResponsePath;

  constructor() {
    this.#clientRequestPath = FirebasePaths.get({
      pathType: FirebasePaths.type.CLIENT_REQUEST,
    });
    this.#serverResponsePath = FirebasePaths.get({
      pathType: FirebasePaths.type.SERVER_RESPONSE,
    });
  }

  async send() {
    SystemEventsHandler.onInfo({info: 'FirebaseCommunicationBridge->send()'});
    SystemEventsHandler.onInfo({
      info: 'FirebaseCommunicationBridge->send(): ' + this.#clientRequestPath,
    });
    SystemEventsHandler.onInfo({
      info: 'FirebaseCommunicationBridge->send(): ' + this.#serverResponsePath,
    });

    const request = {
      uuid: uuidv4(),
      type: 'RUN_LONG_RUNNING_TASK',
    };
    const stringifiedRequest = JSON.stringify(request);

    SystemEventsHandler.onInfo({info: stringifiedRequest});

    const requestRefKey = database().ref(this.#clientRequestPath).push().key;
    await database()
      .ref(this.#clientRequestPath + '/' + requestRefKey)
      .set(stringifiedRequest);
  }
}
