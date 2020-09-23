import {Responses} from '../responses/Responses';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';

export class RequestsManager {
  #communicationBridge;
  #requests = new Map();
  #timeouts = new Map();
  #timeoutTime = 10000;

  constructor({communicationBridge}) {
    this.#communicationBridge = communicationBridge;
  }

  addRequest({
    request,
    requestKey,
    onReceived,
    onCompleted,
    onError,
    onTimeout,
  }) {
    const requestObject = {
      request,
      requestKey,
      onReceived,
      onCompleted,
      onError,
      onTimeout,
    };

    this.#requests.set(request.uuid.toString(), requestObject);

    const timeout = setTimeout(() => {
      if (requestObject.onTimeout) {
        requestObject.onTimeout();
      }

      this.#requests.delete(requestObject.request.uuid.toString());
      this.#timeouts.delete(requestObject.request.uuid.toString());

      this.#communicationBridge.removeRequest({requestKey});
    }, this.#timeoutTime);

    this.#timeouts.set(request.uuid.toString(), timeout);
  }

  async onResponse({stringifiedResponse, responseKey}) {
    const parsedResponse = JSON.parse(stringifiedResponse);
    const parsedResponseType = parsedResponse.type;
    const parsedResponseRequestUuid = parsedResponse.requestUuid;

    if (this.#timeouts.has(parsedResponseRequestUuid)) {
      clearTimeout(this.#timeouts.get(parsedResponseRequestUuid));
      this.#timeouts.delete(parsedResponseRequestUuid);
    }

    const requestObject = this.#requests.get(parsedResponseRequestUuid);
    if (!requestObject) {
      SystemEventsHandler.onError({
        err:
          'RequestsManager->onResponse(): UNABLE_TO_FIND_CORRESPONDING_REQUEST: ' +
          stringifiedResponse,
      });
      return;
    }

    switch (parsedResponseType) {
      case Responses.types.CONFIRM_RECEIVE: {
        if (requestObject.onReceived) {
          requestObject.onReceived();
        }
        break;
      }

      case Responses.types.REQUEST_RESULT: {
        const stringifiedPayload = parsedResponse.stringifiedPayload;
        const payload = JSON.parse(stringifiedPayload);

        if (requestObject.onCompleted) {
          requestObject.onCompleted(payload);
        }

        this.#requests.delete(parsedResponseRequestUuid);

        break;
      }

      case Responses.types.ERROR: {
        const stringifiedPayload = parsedResponse.stringifiedPayload;
        const payload = JSON.parse(stringifiedPayload);

        if (requestObject.onError) {
          requestObject.onError(payload);
        }

        this.#requests.delete(parsedResponseRequestUuid);

        break;
      }

      default: {
        SystemEventsHandler.onError({
          err:
            'RequestsManager->onResponse(): UNKNOWN_RESPONSE: ' +
            parsedResponseType,
        });
      }
    }

    await this.#communicationBridge.removeResponse({responseKey});
  }
}
