import {Notifier} from '../../utils/common/notifier/Notifier';
import {SurveillanceCommunicationManager} from './communication-manager/SurveillanceCommunicationManager';
import {SystemEventsHandler} from '../../utils/common/system-events-handler/SystemEventsHandler';
import {Requests} from './requests/Requests';
import SurveillanceServiceEvents from './data/event-types/SurveillanceServiceEvents';
import {Responses} from './responses/Responses';

export class SurveillanceService {
  static #notifier = new Notifier();
  static #communicationManager;

  static subscribe({event, handler}) {
    return SurveillanceService.#notifier.subscribe({event, handler});
  }

  static async init() {
    this.#communicationManager = new SurveillanceCommunicationManager();
  }

  static async runLongRunningTask() {}

  static async isServerAlive() {
    const {
      request,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    } = Requests.isAliveRequest({
      serviceNotifier: SurveillanceService.#notifier,
    });

    await SurveillanceService.#communicationManager.sendRequest({
      request,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    });
  }

  static async getAllCameras() {
    const {
      request,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    } = Requests.getAllCamerasRequest({
      serviceNotifier: SurveillanceService.#notifier,
    });

    await SurveillanceService.#communicationManager.sendRequest({
      request,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    });
  }

  static async getCameraImage({cameraId}) {
    const {
      request,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    } = Requests.getCameraImageRequest({
      serviceNotifier: SurveillanceService.#notifier,
      cameraId,
    });

    await SurveillanceService.#communicationManager.sendRequest({
      request,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    });
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

    const onCompleted = (data) => {
      SurveillanceService.#notifier.notify({
        event:
          SurveillanceServiceEvents.GET_SURVEILLANCE_STATUS_REQUEST_COMPLETED,
        data: Responses.getSurveillanceStatusResponse(data),
      });
    };

    const onError = (error) => {
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
