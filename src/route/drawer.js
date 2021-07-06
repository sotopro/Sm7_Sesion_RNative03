import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigator from './main';
import AuthNavigator from './auth';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="AuthNavigator">
      <Drawer.Screen name="AuthNavigator" component={AuthNavigator} />
      <Drawer.Screen name="Home" component={MainNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
