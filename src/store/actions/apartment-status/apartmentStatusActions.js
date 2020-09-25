import {
  IS_SERVER_ALIVE,
  IS_SERVER_ALIVE_BEGIN,
  IS_SERVER_ALIVE_COMPLETED,
  IS_SERVER_ALIVE_ERROR,
  IS_SERVER_ALIVE_RECEIVED,
  IS_SERVER_ALIVE_TIMEOUT,
} from '../../types/apartment-status/apartmentStatusTypes';

export const isServerAliveAction = () => {
  return {
    type: IS_SERVER_ALIVE,
  };
};

export const isServerAliveBeginAction = () => {
  return {
    type: IS_SERVER_ALIVE_BEGIN,
  };
};

export const isServerAliveReceivedAction = () => {
  return {
    type: IS_SERVER_ALIVE_RECEIVED,
  };
};

export const isServerAliveCompletedAction = ({isAlive}) => {
  return {
    type: IS_SERVER_ALIVE_COMPLETED,
    payload: {isAlive},
  };
};

export const isServerAliveTimeoutAction = () => {
  return {
    type: IS_SERVER_ALIVE_TIMEOUT,
  };
};

export const isServerAliveErrorAction = ({error}) => {
  return {
    type: IS_SERVER_ALIVE_ERROR,
    payload: {error},
  };
};
