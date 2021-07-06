import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Product from '../views/product';
import {colors} from '../../assets/colors';
import Home from '../views/home';
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({route}) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.black,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Montserrat-Medium',
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
