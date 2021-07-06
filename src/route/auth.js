import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/login';
const Stack = createStackNavigator();

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
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" gestureEnabled={false}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerLeft: () => null,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
