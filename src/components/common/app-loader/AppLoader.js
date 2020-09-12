import React, {useState, useEffect} from 'react';
import wait from '../../../utils/common/wait/wait';
import AppNavigation from '../app-navigation/AppNavigation';
import AppLoading from '../app-loading/AppLoading';
import {SystemEventsHandler} from '../../../utils/common/system-events-handler/SystemEventsHandler';
import Services from '../../../services/Services';

const AppLoader = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initFunc = async () => {
      await wait(500);

      try {
        await Services.init();
      } catch (e) {
        SystemEventsHandler.onError({err: 'AppLoader->init()->ERROR'});
      }

      setReady(true);
    };

    initFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (ready) {
    return <AppNavigation />;
  } else {
    return <AppLoading />;
  }
};

export default AppLoader;
