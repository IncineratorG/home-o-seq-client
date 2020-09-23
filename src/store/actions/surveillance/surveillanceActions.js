import {
  GET_ALL_CAMERAS,
  GET_CAMERA_IMAGE,
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

export const getCameraImage = ({cameraId}) => {
  return {
    type: GET_CAMERA_IMAGE,
    payload: {cameraId},
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
