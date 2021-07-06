/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './route/drawer';
import Home from './views/home';
import {colors} from '../assets/colors/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './views/settings';
const Tab = createBottomTabNavigator();


const BottomTab = () => {
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
          return (
            <Icon
              name={iconName}
              size={24}
              color={colors.black}
              style={styles.categorySelectIcon}
            />
          );
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

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
