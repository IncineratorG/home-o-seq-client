import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import AppLoader from './src/components/common/app-loader/AppLoader';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content" // Here is where you change the font-color
      />
      <AppLoader />
    </Provider>
  );
};

export default App;
