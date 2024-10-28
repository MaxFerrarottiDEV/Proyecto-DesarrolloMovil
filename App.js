import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './js/LoginScreen';  // Asegúrate que esta ruta sea correcta
import HomeScreen from './js/HomeScreen';    // Verifica que esta ruta esté bien
import RegisterScreen from './js/RegisterScreen'; 
//modulos firebase 



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerStyle: { backgroundColor: '#005187' },
            headerTintColor: '#fff', // Cambia el color del texto
          }} 
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen  
          name="Registro" 
          component={RegisterScreen}
          options={{
            headerStyle: { backgroundColor: '#005187' },
            headerTintColor: '#005187',
          }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
