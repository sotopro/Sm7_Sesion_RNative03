import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  label: {
    fontFamily: 'Montserrat-Regular',
  },
});

const Label = ({children, container, label, labelStyle}) => {
  return (
    <View style={[styles.container, container]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {children}
    </View>
  );
};

export default Label;
