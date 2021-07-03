import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Dimensions} from 'react-native';
import Label from '../label/index';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
  },
  opacity: {
    opacity: 0.5,
  },
  input: {
    opacity: 1,
  },
});

const Input = ({
  autoCorrect,
  autoFocus,
  placeholder,
  placeholderTextColor,
  maxLength,
  editable,
  value,
  keyboardType,
  returnKeyType,
  secureTextEntry,
  onFocus,
  onBlur,
  onChange,
  onChangeText,
  textInputStyle,
  ...props
}) => {
  const [valueInput, setValueInput] = useState('');

  const onFocusInput = () => {
    onFocus && onFocus();
  };
  const onBlurInput = () => {
    onBlur && onBlur();
  };
  const onChangeTextInput = inputValue => {
    setValueInput(inputValue);
    onChangeText && onChangeText(inputValue);
  };
  return (
    <View
      pointerEvents={!editable ? 'none' : 'auto'}
      style={!editable ? styles.opacity : styles.input}>
      <Label {...props}>
        <TextInput
          {...props}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          maxLength={maxLength}
          style={[styles.container, textInputStyle]}
          editable={true}
          value={valueInput}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={false}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onChangeText={onChangeTextInput}
        />
      </Label>
    </View>
  );
};

export default Input;
