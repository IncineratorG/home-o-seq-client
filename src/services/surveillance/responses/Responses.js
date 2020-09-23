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

  static getAllCamerasResponse(data) {
    return {
      cameras: data.cameras,
    };
  }

  static getCameraImageResponse(data) {
    return {
      image: data.image,
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
