import React, { useState } from 'react';
import axios from 'axios';
import { useAuthDispatch } from '../context/AuthContext';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAuthDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      dispatch({ type: 'LOGIN', payload: response.data.user });
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
