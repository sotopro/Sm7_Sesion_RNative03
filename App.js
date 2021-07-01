/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
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
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#212121',
    padding: 10,
    width: 200,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 8,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
  },
});

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);
  const [text, setText] = useState('');
  let textLog = '';

  if (timesPressed > 1) {
    textLog = `${timesPressed} x onPress`;
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }
  const handleSubmit = e => {
    console.warn('button', e);
  };

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
      <TextInput
        style={styles.input}
        defaultValue={text}
        onChangeText={text => setText(text)}
        autoFocus={true}
      />
      <Text style={{ padding: 10, fontSize: 16, color: '#212121' }}>
        {text
          .split(' ')
          .map(word => word && `${word}🖤`)
          .join(' ')}
      </Text>
      {/* <Button title="Press me" color="#212121" onPress={e => handleSubmit(e)} />
      <TouchableOpacity style={styles.button} onPress={e => handleSubmit(e)}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity> */}
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(200,230,255)' : 'white',
          },
          styles.button,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed' : 'Press me'}</Text>
        )}
      </Pressable>
      <View>
        <Text>{textLog}</Text>
      </View>
    </View>
  );
};

export default App;
