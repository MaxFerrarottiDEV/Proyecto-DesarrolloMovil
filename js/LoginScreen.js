import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
//modulos firebase 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import appFirebase from './firebase';
//import imagenes
import logo from '../assets/CriosF.png';
import usuario from '../assets/usuario.png';
import candado from '../assets/candado3.png';
import hideIcon from '../assets/hide-solid-24.png';
import showIcon from '../assets/show-solid-24.png';

const auth = getAuth(appFirebase); //inicializar firebase


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      Alert.alert('Login exitoso');
      navigation.navigate('Home'); 
    } catch (error) {
      Alert.alert('Error en el login', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      <View style={styles.inputConteiner}>
        <Image source={usuario} style={styles.icono} />
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
        <Image source={candado} style={styles.icono} />
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

      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>        
        <Text style={styles.botonTextR}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'right',
    paddingHorizontal: 20,
    backgroundColor: '#fcffff',
  },
  logo: {
    width: 270,  
    height: 270,
    marginTop:70,
    marginBottom: 50,
    alignSelf: 'center', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color:'#005187'
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
    textAlign: 'center',
  },
  botonTextR: {
    color: '#005187',
    fontSize: 16,
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
