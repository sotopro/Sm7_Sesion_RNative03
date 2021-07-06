import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './views/login';
import Home from './views/home';
import Product from './views/product';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{title: ''}} />
        {/* <Stack.Screen>
          {props => <Login {...props} extraData={ someData }/>}
        </Stack.Screen> */}
        <Stack.Screen name="Home" component={Home} options={{title: ''}} />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
