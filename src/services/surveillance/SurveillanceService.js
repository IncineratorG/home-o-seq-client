import {Notifier} from '../../utils/common/notifier/Notifier';
import {SurveillanceCommunicationManager} from './communication-manager/SurveillanceCommunicationManager';
import {SystemEventsHandler} from '../../utils/common/system-events-handler/SystemEventsHandler';
import {Requests} from './requests/Requests';
import SurveillanceServiceEvents from './data/event-types/SurveillanceServiceEvents';

export class SurveillanceService {
  static #notifier = new Notifier();
  static #communicationManager;

  static subscribe({event, handler}) {
    return SurveillanceService.#notifier.subscribe({event, handler});
  }

  static async init() {
    this.#communicationManager = new SurveillanceCommunicationManager();
  }

  static async sendTestMessage() {
    // SystemEventsHandler.onInfo({
    //   info: 'SurveillanceService->sendTestMessage()',
    // });
    // await SurveillanceService.#communicationManager.sendRequest();
  }

  static async runLongRunningTask() {
    // const request = {
    //   uuid: uuidv4(),
    //   type: 'RUN_LONG_RUNNING_TASK',
    // };
    // await SurveillanceService.#communicationManager.sendRequest({request});
  }

  static async getSurveillanceStatus() {
    const request = Requests.getSurveillanceStatusRequest();

    const onReceived = () => {
      SurveillanceService.#notifier.notify({
        event:
          SurveillanceServiceEvents.GET_SURVEILLANCE_STATUS_REQUEST_RECEIVED,
        data: {},
      });
    };

    const onCompleted = ({status}) => {
      SurveillanceService.#notifier.notify({
        event:
          SurveillanceServiceEvents.GET_SURVEILLANCE_STATUS_REQUEST_COMPLETED,
        data: {status},
      });
    };

    const onError = ({error}) => {
      SurveillanceService.#notifier.notify({
        event: SurveillanceServiceEvents.GET_SURVEILLANCE_STATUS_REQUEST_ERROR,
        data: {error},
      });
    };

    const onTimeout = () => {
      SurveillanceService.#notifier.notify({
        event:
          SurveillanceServiceEvents.GET_SURVEILLANCE_STATUS_REQUEST_TIMEOUT,
        data: {},
      });
    };

    await SurveillanceService.#communicationManager.sendRequest({
      request,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    });
  }
}
