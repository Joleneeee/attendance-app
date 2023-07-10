import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    const validEmail = 'student@example.com';
    const validPassword = 'password';
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset email and password fields after login
    setEmail('');
    setPassword('');

    if (email === validEmail && password === validPassword) {
        console.log('Login successful');
        // Navigate to the next screen or perform any other actions upon successful login
        setEmail('');
        setPassword('');
      } else {
        console.log('Invalid email or password');
        // Display an error message or perform any other actions upon unsuccessful login
      }
    };

  return (
    <View style={styles.container}>
      <Image
        source={require('./sunwaylion.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Login;
