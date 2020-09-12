import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {FirebaseCommunicationBridge} from '../communication-bridge/firebase-communication-bridge/FirebaseCommunicationBridge';

export class SurveillanceCommunicationManager {
  #communicationBridge;

  constructor() {
    this.#communicationBridge = new FirebaseCommunicationBridge();

    const responseHandler = (response) => {
      SystemEventsHandler.onInfo({
        info: 'SurveillanceCommunicationManager->ON_RESPONSE: ' + response,
      });
    };

    this.#communicationBridge.onResponse({handler: responseHandler});
  }

  async sendRequest({request}) {
    SystemEventsHandler.onInfo({
      info:
        'SurveillanceCommunicationManager->sendRequest(): ' +
        JSON.stringify(request),
    });

    // await this.#communicationBridge.sendRequest();
  }
}
