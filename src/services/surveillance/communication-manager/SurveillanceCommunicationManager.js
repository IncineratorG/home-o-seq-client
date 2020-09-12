import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {FirebaseCommunicationBridge} from '../communication-bridge/firebase-communication-bridge/FirebaseCommunicationBridge';

export class SurveillanceCommunicationManager {
  #communicationBridge;
  #requestsUuidSet = new Set();

  constructor() {
    this.#communicationBridge = new FirebaseCommunicationBridge();

    const responseHandler = async ({key, value}) => {
      const parsedResponse = JSON.parse(value);
      const parserResponseType = parsedResponse.type;
      const parsedResponseRequestUuid = parsedResponse.requestUuid;

      SystemEventsHandler.onInfo({
        info:
          'SurveillanceCommunicationManager->ON_RESPONSE: ' +
          parserResponseType +
          ' - ' +
          parsedResponseRequestUuid,
      });

      if (this.#requestsUuidSet.has(parsedResponseRequestUuid)) {
        this.#requestsUuidSet.delete(parsedResponseRequestUuid);
        await this.#communicationBridge.removeResponse({responseKey: key});
      }
    };

    const notificationHandler = ({key, value}) => {
      SystemEventsHandler.onInfo({
        info: 'SurveillanceCommunicationManager->ON_NOTIFICATION: ' + value,
      });
    };

    this.#communicationBridge.onResponse({handler: responseHandler});
    this.#communicationBridge.onNotification({handler: notificationHandler});
  }

  async sendRequest({request}) {
    if (!request) {
      SystemEventsHandler.onError({
        err: 'SurveillanceCommunicationManager->sendRequest(): EMPTY_REQUEST',
      });
      return;
    }

    if (!request.type) {
      SystemEventsHandler.onError({
        err: 'SurveillanceCommunicationManager->sendRequest(): NO_REQUEST_TYPE',
      });
      return;
    }

    if (!request.uuid) {
      SystemEventsHandler.onError({
        err: 'SurveillanceCommunicationManager->sendRequest(): NO_REQUEST_UUID',
      });
      return;
    }

    this.#requestsUuidSet.add(request.uuid.toString());

    await this.#communicationBridge.sendRequest({request});
  }
}
