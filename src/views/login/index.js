import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import Input from '../../shared/components/form/input';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
  },
  input: {
    marginTop: 5,
    paddingBottom: 5,
    color: '#212121',
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#212121',
    padding: 14,
    width: width * 0.8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  errorContainer: {
    flex: 0.2,
    alignItems: 'flex-start',
    marginLeft: 40,
  },
  error: {
    color: '#BF4C41',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  sendedTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
  },
});

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [sended, setSended] = useState(false);

  const onChangeTextInput = (type, value) => {
    switch (type) {
      case 'username':
        setUsername(value);
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

  const handleSubmit = () => {
    if (!username || !phoneNumber || !email) {
      setError(true);
    } else {
      setError(false);
      //   setSended(true);
      navigation.navigate('Home', {
        username,
        email,
        phoneNumber,
      });
      //   navigation.goBack();
      //   navigation.popToTop();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {!sended ? (
          <>
            <Input
              editable={true}
              label="Username"
              textInputStyle={styles.input}
              autoCorrect={true}
              placeholder="your username"
              placeholderTextColor="#cccccc"
              maxLength={50}
              value
              returnKeyType="done"
              onChangeText={value => onChangeTextInput('username', value)}
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {error && (
              <View style={styles.errorContainer}>
                <Text style={styles.error}>*Complete all fields.</Text>
              </View>
            )}
          </>
        ) : (
          <>
            <Text style={styles.sendedTitle}>Sended Succesfully!</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default Login;
