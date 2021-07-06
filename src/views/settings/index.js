import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 40,
  },
});

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings!</Text>
    </View>
  );
};

export default Settings;
