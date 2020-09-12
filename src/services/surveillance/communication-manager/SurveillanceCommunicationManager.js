import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {FirebaseCommunicationBridge} from '../communication-bridge/firebase-communication-bridge/FirebaseCommunicationBridge';

export class SurveillanceCommunicationManager {
  #communicationBridge;

  constructor() {
    this.#communicationBridge = new FirebaseCommunicationBridge();
  }

  async sendTestMessage() {
    SystemEventsHandler.onInfo({
      info: 'SurveillanceCommunicationManager->sendTestMessage()',
    });

    await this.#communicationBridge.send();
  }
}
