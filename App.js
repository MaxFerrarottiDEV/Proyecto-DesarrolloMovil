import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './js/LoginScreen';  // Asegúrate que esta ruta sea correcta
import HomeScreen from './js/HomeScreen';    // Verifica que esta ruta esté bien
import RegisterScreen from './js/RegisterScreen'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Inicio de Sesion" 
          component={LoginScreen} 
          options={{
            headerStyle: { backgroundColor: '#3498db' }, // Cambia el color de fondo
            headerTintColor: '#fff', // Cambia el color del texto
          }} 
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
