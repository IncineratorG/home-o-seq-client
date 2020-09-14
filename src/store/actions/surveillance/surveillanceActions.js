import {
  GET_SURVEILLANCE_STATUS,
  SEND_TEST_MESSAGE,
} from '../../types/surveillance/surveillanceTypes';

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
