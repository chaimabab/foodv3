import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = () => {
    axios.post('https://', {
      email: email,
      password: password
    })
    .then(function (response) {
      if (response.data.success) {
        Alert.alert('Login Successful', 'Welcome!');
        // handle successful login
      } else {
        setErrorMessage(response.data.message);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  
    <View>
    <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
    />
    <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
    />
    <Button title="Login" onPress={handleLogin} />
    </View>
    {errorMessage ? (
        <View>
        <Text>{errorMessage}</Text>
        </View>
    ) : null}
  
  
}

export default LoginScreen;
