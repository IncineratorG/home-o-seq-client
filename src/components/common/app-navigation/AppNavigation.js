import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../../screens/main/Main';

const MainStack = createStackNavigator();

const AppNavigation = () => {
  const mainStack = (
    <MainStack.Navigator mode="card">
      <MainStack.Screen
        name={'Main'}
        component={Main}
        options={{title: 'Main Screen'}}
      />
    </MainStack.Navigator>
  );

  return <NavigationContainer>{mainStack}</NavigationContainer>;
};

export default AppNavigation;
