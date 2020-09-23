import {
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
