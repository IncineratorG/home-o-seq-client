import {
  GET_APARTMENT_STATUS,
  GET_APARTMENT_STATUS_BEGIN,
  GET_APARTMENT_STATUS_COMPLETED,
  GET_APARTMENT_STATUS_ERROR,
  GET_APARTMENT_STATUS_RECEIVED,
  GET_APARTMENT_STATUS_TIMEOUT,
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

export const isServerAliveErrorAction = ({code, description}) => {
  return {
    type: IS_SERVER_ALIVE_ERROR,
    payload: {error: {code, description}},
  };
};

export const getApartmentStatusAction = () => {
  return {
    type: GET_APARTMENT_STATUS,
  };
};

export const getApartmentStatusBeginAction = () => {
  return {
    type: GET_APARTMENT_STATUS_BEGIN,
  };
};

export const getApartmentStatusReceivedAction = () => {
  return {
    type: GET_APARTMENT_STATUS_RECEIVED,
  };
};

export const getApartmentStatusCompletedAction = ({cameras}) => {
  return {
    type: GET_APARTMENT_STATUS_COMPLETED,
    payload: {cameras},
  };
};

export const getApartmentStatusTimeoutAction = () => {
  return {
    type: GET_APARTMENT_STATUS_TIMEOUT,
  };
};

export const getApartmentStatusErrorAction = ({code, description}) => {
  return {
    type: GET_APARTMENT_STATUS_ERROR,
    payload: {error: {code, description}},
  };
};
