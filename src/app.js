import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Input from './shared/components/form/input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 5,
    paddingBottom: 5,
    color: '#212121',
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
  },
});

const App = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const onChangeTextInput = (type, value) => {
    switch (type) {
      case 'name':
        setName(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;

      case 'email':
        setEmail(value);
        break;
      default:
        return;
    }
  };

  console.warn({
    name,
    phoneNumber,
    email,
  });
  return (
    <View style={styles.container}>
      <Input
        editable={true}
        label="Name"
        textInputStyle={styles.input}
        autoCorrect={true}
        placeholder="your name"
        placeholderTextColor="#cccccc"
        maxLength={50}
        value
        returnKeyType="done"
        onChangeText={value => onChangeTextInput('name', value)}
      />
      <Input
        editable={true}
        label="Phone Number"
        textInputStyle={styles.input}
        autoCorrect={false}
        placeholder="your phone number"
        placeholderTextColor="#cccccc"
        keyboardType="phone-pad"
        maxLength={13}
        value
        returnKeyType="done"
        onChangeText={value => onChangeTextInput('phoneNumber', value)}
      />
      <Input
        editable={true}
        label="Email"
        textInputStyle={styles.input}
        autoCorrect={false}
        placeholder="your email"
        placeholderTextColor="#cccccc"
        keyboardType="email-address"
        maxLength={80}
        value
        returnKeyType="done"
        onChangeText={value => onChangeTextInput('email', value)}
      />
    </View>
  );
};

export default App;
