import database from '@react-native-firebase/database';
import {SystemEventsHandler} from '../../../../utils/common/system-events-handler/SystemEventsHandler';
import {FirebasePaths} from './firebase-paths/FirebasePaths';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {Notifier} from '../../../../utils/common/notifier/Notifier';

export class FirebaseCommunicationBridge {
  #clientRequestPath;
  #serverResponsePath;
  #serverNotificationPath;
  #responsesNotifier = new Notifier();
  #notificationsNotifier = new Notifier();
  #RESPONSE_EVENT = 'RESPONSE_EVENT';
  #NOTIFICATION_EVENT = 'NOTIFICATION_EVENT';

  constructor() {
    this.#clientRequestPath = FirebasePaths.get({
      pathType: FirebasePaths.type.CLIENT_REQUEST,
    });
    this.#serverResponsePath = FirebasePaths.get({
      pathType: FirebasePaths.type.SERVER_RESPONSE,
    });
    this.#serverNotificationPath = FirebasePaths.get({
      pathType: FirebasePaths.type.SERVER_NOTIFICATION,
    });

    const serverResponseHandler = (responses) => {
      if (!responses) {
        return;
      }

      responses.forEach((response) => {
        const responseKey = response.key;
        const responseValue = response.val();

        this.#responsesNotifier.notify({
          event: this.#RESPONSE_EVENT,
          data: responseValue,
        });
      });
    };

    const serverNotificationHandler = (notifications) => {
      if (!notifications) {
        return;
      }

      notifications.forEach((notification) => {
        const notificationKey = notification.key;
        const notificationValue = notification.val();

        this.#notificationsNotifier.notify({
          event: this.#NOTIFICATION_EVENT,
          data: notificationValue,
        });
      });
    };

    database().ref(this.#serverResponsePath).on('value', serverResponseHandler);
    database()
      .ref(this.#serverNotificationPath)
      .on('value', serverNotificationHandler);
  }

  async sendRequest({request}) {
    SystemEventsHandler.onInfo({
      info: 'FirebaseCommunicationBridge->sendRequest()',
    });
  }

  onResponse({handler}) {
    return this.#responsesNotifier.subscribe({
      event: this.#RESPONSE_EVENT,
      handler: handler,
    });
  }

  onNotification({handler}) {
    return this.#notificationsNotifier.subscribe({
      event: this.#NOTIFICATION_EVENT,
      handler: handler,
    });
  }

  // async sendRequest() {
  //   SystemEventsHandler.onInfo({info: 'FirebaseCommunicationBridge->send()'});
  //   SystemEventsHandler.onInfo({
  //     info: 'FirebaseCommunicationBridge->send(): ' + this.#clientRequestPath,
  //   });
  //   SystemEventsHandler.onInfo({
  //     info: 'FirebaseCommunicationBridge->send(): ' + this.#serverResponsePath,
  //   });
  //
  //   const request = {
  //     uuid: uuidv4(),
  //     type: 'RUN_LONG_RUNNING_TASK',
  //   };
  //   const stringifiedRequest = JSON.stringify(request);
  //
  //   SystemEventsHandler.onInfo({info: stringifiedRequest});
  //
  //   const requestRefKey = database().ref(this.#clientRequestPath).push().key;
  //   await database()
  //     .ref(this.#clientRequestPath + '/' + requestRefKey)
  //     .set(stringifiedRequest);
  // }
}
