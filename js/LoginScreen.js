import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import logo from '../assets/crios.jpeg';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí agregarías la lógica para autenticar al usuario
    if (email === '' && password === '123456') {
      Alert.alert('Login exitoso');
      navigation.navigate('Home');
    } else {
      Alert.alert('Credenciales inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Iniciar" onPress={handleLogin} />
      <Button 
        title="¿No tienes cuenta? Regístrate aquí" 
        onPress={() => navigation.navigate('Registro')}  // Navegar a la pantalla de registro
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#84b6f4',
  },
  logo: {
    width: 200,  // Ajusta el tamaño que quieras
    height: 200,
    marginBottom: 40,  // Añade espacio entre la imagen y el resto del formulario
    alignSelf: 'center',  // Centrar la imagen
    borderCurve: 10, 
  },
    title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
