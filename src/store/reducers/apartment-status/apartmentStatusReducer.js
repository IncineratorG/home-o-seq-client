import {
  IS_SERVER_ALIVE_BEGIN,
  IS_SERVER_ALIVE_COMPLETED,
  IS_SERVER_ALIVE_ERROR,
  IS_SERVER_ALIVE_RECEIVED,
  IS_SERVER_ALIVE_TIMEOUT,
} from '../../types/apartment-status/apartmentStatusTypes';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';

const initialState = {
  value: undefined,
};

export const apartmentStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_SERVER_ALIVE_BEGIN: {
      SystemEventsHandler.onInfo({
        info: 'apartmentStatusReducer->IS_SERVER_ALIVE_BEGIN',
      });

      return state;
    }

    case IS_SERVER_ALIVE_RECEIVED: {
      SystemEventsHandler.onInfo({
        info: 'apartmentStatusReducer->IS_SERVER_ALIVE_RECEIVED',
      });

      return state;
    }

    case IS_SERVER_ALIVE_COMPLETED: {
      SystemEventsHandler.onInfo({
        info:
          'apartmentStatusReducer->IS_SERVER_ALIVE_COMPLETED: ' +
          action.payload.isAlive,
      });

      return state;
    }

    case IS_SERVER_ALIVE_TIMEOUT: {
      SystemEventsHandler.onInfo({
        info: 'apartmentStatusReducer->IS_SERVER_ALIVE_TIMEOUT',
      });

      return state;
    }

    case IS_SERVER_ALIVE_ERROR: {
      const errorCode = action.payload.error.code;
      const errorDescription = action.payload.error.description;

      SystemEventsHandler.onInfo({
        info:
          'apartmentStatusReducer->IS_SERVER_ALIVE_ERROR: ' +
          errorCode +
          ' - ' +
          errorDescription,
      });

      return state;
    }

    default: {
      return state;
    }
  }
};
