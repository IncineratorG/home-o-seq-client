export class Responses {
  static types = {
    CONFIRM_RECEIVE: 'CONFIRM_RECEIVE_MESSAGE',
    REQUEST_RESULT: 'REQUEST_RESULT_MESSAGE',
  };

  static getSurveillanceStatusResponse(data) {
    return {
      timestamp: data.timestamp,
      isRunning: data.isRunning,
      testStringValue: data.testStringValue,
    };
  }
}
