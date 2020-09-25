import {
  GET_ALL_CAMERAS,
  GET_CAMERA_IMAGE,
  GET_CAMERA_IMAGE_BEGIN,
  GET_CAMERA_IMAGE_COMPLETED,
  GET_CAMERA_IMAGE_ERROR,
  GET_CAMERA_IMAGE_RECEIVED,
  GET_CAMERA_IMAGE_TIMEOUT,
  GET_SURVEILLANCE_STATUS,
  IS_SERVER_ALIVE,
  SEND_TEST_MESSAGE,
} from '../../types/surveillance/surveillanceTypes';

export const isServerAliveAction = () => {
  return {
    type: IS_SERVER_ALIVE,
    payload: undefined,
  };
};

export const getAllCamerasAction = () => {
  return {
    type: GET_ALL_CAMERAS,
    payload: undefined,
  };
};

export const getCameraImageAction = ({cameraId}) => {
  return {
    type: GET_CAMERA_IMAGE,
    payload: {cameraId},
  };
};

export const getCameraImageBeginAction = () => {
  return {
    type: GET_CAMERA_IMAGE_BEGIN,
    payload: undefined,
  };
};

export const getCameraImageReceivedAction = () => {
  return {
    type: GET_CAMERA_IMAGE_RECEIVED,
    payload: undefined,
  };
};

export const getCameraImageCompletedAction = ({cameraId, serializedImage}) => {
  return {
    type: GET_CAMERA_IMAGE_COMPLETED,
    payload: {cameraId, serializedImage},
  };
};

export const getCameraImageTimeoutAction = () => {
  return {
    type: GET_CAMERA_IMAGE_TIMEOUT,
    payload: undefined,
  };
};

export const getCameraImageErrorAction = (error) => {
  return {
    type: GET_CAMERA_IMAGE_ERROR,
    payload: {error},
  };
};

export const sendTestMessageAction = () => {
  return {
    type: SEND_TEST_MESSAGE,
    payload: undefined,
  };
};

export const getSurveillanceStatusAction = () => {
  return {
    type: GET_SURVEILLANCE_STATUS,
    payload: undefined,
  };
};
