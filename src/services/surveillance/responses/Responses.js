export class Responses {
  static types = {
    CONFIRM_RECEIVE: 'CONFIRM_RECEIVE_MESSAGE',
    REQUEST_RESULT: 'REQUEST_RESULT_MESSAGE',
    ERROR: 'ERROR_MESSAGE',
  };

  static errorResponse(error) {
    return {
      code: error.code,
      description: error.description,
    };
  }

  static isAliveResponse(data) {
    return {
      isAlive: data,
    };
  }

  static getApartmentStatusResponse(data) {
    return {
      cameras: data.cameras,
      isAlive: data.isAlive,
    };
  }

  static getAllCamerasResponse(data) {
    return {
      cameras: data,
    };
  }

  static getCameraImageResponse(data) {
    return {
      cameraId: data.id,
      serializedImage: data.serializedImage,
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
