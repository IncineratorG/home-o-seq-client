import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import {
  getSurveillanceStatusAction,
  sendTestMessageAction,
} from '../../../store/actions/surveillance/surveillanceActions';

export const mainViewController = (model) => {
  const sendTestMessageHandler = () => {
    SystemEventsHandler.onInfo({info: 'sendTestMessageHandler()'});

    model.dispatch(getSurveillanceStatusAction());
  };

  return {
    sendTestMessageHandler,
  };
};
