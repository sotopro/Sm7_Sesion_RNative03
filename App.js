/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Logo from './src/shared/static/image/react-native.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  image: {
    width: 200,
    height: 200,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: 'https://s3-eu-west-1.amazonaws.com/xavitristancho/react-native.png',
        }}
        style={styles.image}
      /> */}
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
};

export default App;
