/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput,StyleSheet, Alert,TouchableOpacity,Image} from 'react-native';
import hideIcon from '../assets/hide-solid-24.png';
import showIcon from '../assets/show-solid-24.png';

//modulos firebase 
import appFirebase from './firebase';
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
    if (name && email && password && dni && Apellido && ConfiPassword) {
      if (password !== ConfiPassword) {
        Alert.alert('Las contraseñas no coinciden');
      } else {
        try {
          // Registrar el usuario 
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          // 2. Almacenar datos adicionales en Firestore
          await setDoc(doc(db, 'usuarios', user.uid), {
            name: name,
            apellido: Apellido,
            dni: dni,
            email: email,
          });
          Alert.alert('Registro exitoso');
          navigation.navigate('Logins'); // Navegar a la pantalla de Login
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Error', 'El correo electrónico ya existe.');
          } else {
            Alert.alert('Error en el registro', error.message);
          };
        }
      }
    } else {
      Alert.alert('Por favor, completa todos los campos');
    }
  };

  return (
    <View style={styles.container}>
16gLaJKcDHVHbccbo9ayPsopB6gA1pZB888m8q6g2T8x6kBm
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderColor: '#fcffff',
    borderWidth: 1,
    marginBottom: 20,
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
  },
  botonTextReg:{
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
    marginBottom: 20,
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