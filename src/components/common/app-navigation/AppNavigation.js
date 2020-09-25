import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../../screens/main/Main';
import ApartmentStatus from '../../../screens/apartment-status/ApartmentStatus';

const MainStack = createStackNavigator();

const AppNavigation = () => {
  const mainStack = (
    <MainStack.Navigator mode="card">
      <MainStack.Screen
        name={'ApartmentStatus'}
        component={ApartmentStatus}
        options={{title: 'Apartment status'}}
      />
    </MainStack.Navigator>
  );

  // const mainStack = (
  //   <MainStack.Navigator mode="card">
  //     <MainStack.Screen
  //       name={'Main'}
  //       component={Main}
  //       options={{title: 'Main Screen'}}
  //     />
  //   </MainStack.Navigator>
  // );

  return <NavigationContainer>{mainStack}</NavigationContainer>;
};

export default AppNavigation;
