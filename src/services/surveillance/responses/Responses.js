export class Responses {
  static types = {
    CONFIRM_RECEIVE: 'CONFIRM_RECEIVE_MESSAGE',
    REQUEST_RESULT: 'REQUEST_RESULT_MESSAGE',
    ERROR: 'ERROR_MESSAGE',
  };

  static isAliveResponse(data) {
    return {
      isAlive: data,
    };
  }

  static getSurveillanceStatusResponse(data) {
    return {
      timestamp: data.timestamp,
      isRunning: data.isRunning,
      testStringValue: data.testStringValue,
    };
  }
}
