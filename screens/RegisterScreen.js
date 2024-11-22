/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, Text, TextInput,StyleSheet, Alert,TouchableOpacity,Image} from 'react-native';
import hideIcon from '../assets/hide-solid-24.png';
import showIcon from '../assets/show-solid-24.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import appFirebase from './fb';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [Apellido, setApellido] = useState('');
  const [dni, setdni] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfiPassword, setConfiPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfiPasswordVisible, setIsConfiPasswordVisible] = useState(false);

  const handleRegister = async () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/; // 6 caracteres mínimos, al menos una mayúscula, una minúscula y un número.
  
    if (name && email && password && dni && Apellido && ConfiPassword) {
      if (!passwordRegex.test(password)) {
        Alert.alert(
          'Contraseña inválida',
          'La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.'
        );
        return;
      }
  
      if (password !== ConfiPassword) {
        Alert.alert('Las contraseñas no coinciden');
        return;
      }
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        await setDoc(doc(db, 'usuarios', user.uid), {
          name: name,
          apellido: Apellido,
          dni: dni,
          email: email,
        });
  
        Alert.alert('Registro exitoso');
        navigation.navigate('Login'); 
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'El correo electrónico ya existe.');
        } else {
          Alert.alert('Error en el registro', error.message);
        }
      }
    } else {
      Alert.alert('Por favor, completa todos los campos');
    }
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15, marginBottom: 10}}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
              <Text style={{fontSize: 20, marginLeft: 8 }}>
                  Volver
              </Text>
          </View>
      </TouchableOpacity>
      <TextInput
        style={styles.inputContainer}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Apellido"
        value={Apellido}
        onChangeText={setApellido}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="DNI"
        value={dni}
        onChangeText={setdni}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.iconContainer}>
          <Image source={isPasswordVisible ? showIcon : hideIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          value={ConfiPassword}
          onChangeText={setConfiPassword}
          secureTextEntry={!isConfiPasswordVisible}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setIsConfiPasswordVisible(!isConfiPasswordVisible)} style={styles.iconContainer}>
          <Image source={isConfiPasswordVisible ? showIcon : hideIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.botregistro}>
        <Text style={styles.botonTextReg}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fcffff',
  },
  input: {
    height: 40,
    borderColor: '#fcffff',
    borderWidth: 1,
    marginBottom: 25,  // Aumenté el margen inferior aquí
    paddingHorizontal: 10,
    backgroundColor: '#fcffff',
    textAlign: 'left',
    width: '87%',
  },
  botregistro:{
    backgroundColor: '#005187',
    marginBottom: 40,
    padding: 10,
    borderRadius: 20,
    display: 'flex',
    justifyContent:'flex-end',
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,  // Agregué un margen superior al botón
  },
  botonTextReg:{
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#005187',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 35,  // Aumenté el margen inferior aquí
    width: '100%',
    backgroundColor: '#fcffff',
    height: 70,
  },
  iconContainer: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});


export default RegisterScreen;