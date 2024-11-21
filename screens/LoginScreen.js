/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';

// Modulos Firebase
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import appFirebase from './fb';

// Importar imágenes
import logo from '../assets/CriosF.png';
import Feather from '@expo/vector-icons/Feather';
import hideIcon from '../assets/hide-solid-24.png';
import showIcon from '../assets/show-solid-24.png';

const auth = getAuth(appFirebase); // Inicializar firebase

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Inicio'); 
    } catch (error) {
      Alert.alert('Error al intentar iniciar sesión.', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Iniciar Sesión</Text>

        <View style={styles.inputConteiner}>
          <Feather name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputConteiner}>
          <Feather name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Image source={isPasswordVisible ? showIcon : hideIcon} style={styles.icono} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.botonlogin}>
          <Text style={styles.botonTextlogin}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.botonTextR}>¿No tienes cuenta? Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Asegura que el contenido dentro del ScrollView ocupe el espacio disponible
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Centra el contenido verticalmente
    paddingHorizontal: 20,
    backgroundColor: '#fcffff', // Fondo claro para toda la pantalla
  },
  logo: {
    width: 270,
    height: 270,
    marginTop: 70,
    marginBottom: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#005187',
  },
  input: {
    height: 50,
    borderColor: '#fcffff',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fcffff',
    width: '87%',
    textAlign: 'left',
    alignSelf: 'flex-end',
  },
  botonlogin: {
    backgroundColor: '#005187',
    marginBottom: 40,
    padding: 10,
    borderRadius: 20,
    width: '50%',
    alignSelf: 'center',
  },
  botonTextlogin: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  botonTextR: {
    color: '#005187',
    fontSize: 18,
    textAlign: 'center',
  },
  inputConteiner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#005187',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fcffff',
  },
  icono: {
    width: 25,
    height: 25,
    marginLeft: 1,
  },
});

export default LoginScreen;
