export class RequestsManager {
  #communicationBridge;
  #requests = new Map();
  #timeouts = new Map();

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

      this.#requests.delete(request.uuid.toString());
    }, 2000);

    this.#timeouts.set(request.uuid.toString(), timeout);
  }

  onResponse({stringifiedResponse, responseKey}) {
    const parsedResponse = JSON.parse(stringifiedResponse);
    const parserResponseType = parsedResponse.type;
    const parsedResponseRequestUuid = parsedResponse.requestUuid;

    if (this.#timeouts.has(parsedResponseRequestUuid)) {
      clearTimeout(this.#timeouts.get(parsedResponseRequestUuid));
      this.#timeouts.delete(parsedResponseRequestUuid);
    }
  }
}
