import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {
  getSurveillanceStatusAction,
  isServerAliveAction,
  sendTestMessageAction,
} from '../../../store/actions/surveillance/surveillanceActions';

export const mainViewController = (model) => {
  const sendTestMessageHandler = () => {
    SystemEventsHandler.onInfo({info: 'sendTestMessageHandler()'});

    model.dispatch(isServerAliveAction());
  };

  return {
    sendTestMessageHandler,
  };
};
