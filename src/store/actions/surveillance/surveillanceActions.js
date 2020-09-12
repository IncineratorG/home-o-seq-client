import {SEND_TEST_MESSAGE} from '../../types/surveillance/surveillanceTypes';

export const sendTestMessageAction = () => {
  return {
    type: SEND_TEST_MESSAGE,
    payload: undefined,
  };
};
