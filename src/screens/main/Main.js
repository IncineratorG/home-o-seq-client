import React from 'react';
import {mainViewStyles} from './styles/mainViewStyles';
import {useMainViewModel} from './models/mainViewModel';
import {mainViewController} from './controllers/mainViewController';
import MainView from './views/MainView';

const Main = () => {
  const styles = mainViewStyles;
  const model = useMainViewModel();
  const controller = mainViewController(model);

  return <MainView styles={styles} model={model} controller={controller} />;
};

export default Main;
