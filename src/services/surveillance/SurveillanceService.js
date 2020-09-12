import {Notifier} from '../../utils/common/notifier/Notifier';
import {SurveillanceCommunicationManager} from './communication-manager/SurveillanceCommunicationManager';
import {SystemEventsHandler} from '../../utils/common/system-events-handler/SystemEventsHandler';

export class SurveillanceService {
  static #notifier = new Notifier();
  static #communicationManager;

  static async init() {
    this.#communicationManager = new SurveillanceCommunicationManager();
  }

  static async sendTestMessage() {
    SystemEventsHandler.onInfo({
      info: 'SurveillanceService->sendTestMessage()',
    });

    await SurveillanceService.#communicationManager.sendTestMessage();
  }
}
