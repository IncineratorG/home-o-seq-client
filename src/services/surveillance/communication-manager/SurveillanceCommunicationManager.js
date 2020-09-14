import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {FirebaseCommunicationBridge} from '../communication-bridge/firebase-communication-bridge/FirebaseCommunicationBridge';
import {RequestsManager} from '../requests-manager/RequestsManager';

export class SurveillanceCommunicationManager {
  #communicationBridge;
  #requestsManager;
  #requestsUuidSet = new Set();

  constructor() {
    this.#communicationBridge = new FirebaseCommunicationBridge();
    this.#requestsManager = new RequestsManager({
      communicationBridge: this.#communicationBridge,
    });

    const responseHandler = async ({key, value}) => {
      this.#requestsManager.onResponse({
        stringifiedResponse: value,
        responseKey: key,
      });

      // const parsedResponse = JSON.parse(value);
      // const parserResponseType = parsedResponse.type;
      // const parsedResponseRequestUuid = parsedResponse.requestUuid;
      //
      // SystemEventsHandler.onInfo({
      //   info:
      //     'SurveillanceCommunicationManager->ON_RESPONSE: ' +
      //     parserResponseType +
      //     ' - ' +
      //     parsedResponseRequestUuid,
      // });
      //
      // if (this.#requestsUuidSet.has(parsedResponseRequestUuid)) {
      //   this.#requestsUuidSet.delete(parsedResponseRequestUuid);
      //   await this.#communicationBridge.removeResponse({responseKey: key});
      // }
    };

    const notificationHandler = ({key, value}) => {
      SystemEventsHandler.onInfo({
        info: 'SurveillanceCommunicationManager->ON_NOTIFICATION: ' + value,
      });
    };

    this.#communicationBridge.onResponse({handler: responseHandler});
    this.#communicationBridge.onNotification({handler: notificationHandler});
  }

  async sendRequest({request, onReceived, onCompleted, onError, onTimeout}) {
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

    // SystemEventsHandler.onInfo({info: 'sendRequest()'});

    const requestKey = this.#communicationBridge.getNewRequestKey();

    this.#requestsManager.addRequest({
      request,
      requestKey,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    });

    await this.#communicationBridge.sendRequest({request, requestKey});
  }
}
