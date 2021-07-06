import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './route/drawer';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
