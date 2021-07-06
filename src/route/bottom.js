import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../views/home';
import Settings from '../views/settings';
import {colors} from '../../assets/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'wrench';
          }
          return <Icon name={iconName} size={24} color={colors.black} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.price,
        inactiveTintColor: colors.black,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
