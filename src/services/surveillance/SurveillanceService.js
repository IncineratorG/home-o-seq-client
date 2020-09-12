import {Notifier} from '../../utils/common/notifier/Notifier';
import {SurveillanceCommunicationManager} from './communication-manager/SurveillanceCommunicationManager';
import {SystemEventsHandler} from '../../utils/common/system-events-handler/SystemEventsHandler';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

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

    // await SurveillanceService.#communicationManager.sendRequest();
  }

  static async runLongRunningTask() {
    const request = {
      uuid: uuidv4(),
      type: 'RUN_LONG_RUNNING_TASK',
    };

    await SurveillanceService.#communicationManager.sendRequest({request});
  }
}
