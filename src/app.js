/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './views/login';
import Home from './views/home';
import Product from './views/product';
import {colors} from '../assets/colors/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './views/settings';
const Stack = createStackNavigator();
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

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
  },
});

const LogoTitle = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: 'https://d1iiooxwdowqwr.cloudfront.net/pub/appsubmissions/20180320214633_LogoRoundedRedBg1024.png',
        }}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerLeft: () => null,
            title: '',
          }}
        />
        {/* <Stack.Screen>
          {props => <Login {...props} extraData={ someData }/>}
        </Stack.Screen> */}
        <Stack.Screen
          name="Home"
          component={BottomTab}
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
    </NavigationContainer>
  );
};

export default App;
