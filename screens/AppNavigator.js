/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, TouchableOpacity, View, Image } from "react-native"; // Agregamos Image
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Importamos FontAwesome
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import InscripcionScreen from "./InscripcionScreen";
import InscFormScreen from "./InscFormScreen";
import GuiaScreen from "./GuiaScreen";
//import RegisterScreen from "./RegisterScreen";
//import LoginScreen from "./LoginScreen";


const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login"
        screenOptions={({ navigation }) => ({
          tabBarStyle: { backgroundColor: "#005187" }, // Color de fondo de la barra inferior
          tabBarActiveTintColor: "#ffffff", // Color de las letras activas en la barra inferior
          tabBarInactiveTintColor: "#ffffff", // Color de las letras inactivas en la barra inferior
          headerStyle: { backgroundColor: "#005187" }, // Color de fondo del header superior
          headerTintColor: "#ffffff", // Color del texto en el header superior
          
          // Agregar el ícono a la izquierda del header
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
              <Image
                source={require('../assets/icon.png')}  // Ruta del icono
                style={{ width: 31, height: 30, marginRight: 2 }} // Ajustar el tamaño del icono
              />
            </View>
          ),
          
          // Botón de perfil a la derecha del header
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                <Text style={{ color: '#ffffff', fontSize: 16, marginRight: 8 }}>
                  Perfil
                </Text>
                <FontAwesome name="user" size={20} color="#ffffff" />
              </View>
            </TouchableOpacity>
          ),
        })}
      >
        {/* Pantalla de Inicio con icono "home" */}
        {/*
        <Tab.Screen 
          name="Logins" 
          component={LoginScreen} 
          options={{
            headerStyle: { backgroundColor: '#005187' },
            headerTintColor: '#fff', // Cambia el color del texto
            tabBarButton: () => null
          }} 
        />
        <Tab.Screen  
          name="Register" 
          component={RegisterScreen}
          options={{
            headerStyle: { backgroundColor: '#005187' },
            headerTintColor: '#005187',
            tabBarButton: () => null
          }} 
          />
        */}
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />

        {/* Pantalla de Solicitudes con icono "list" */}
        <Tab.Screen
          name="Inscripciones"
          component={InscripcionScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="list" color={color} size={size} />
            ),
          }}
        />

        {/* Pantalla de Consultas con icono "list-alt" */}
        <Tab.Screen
          name="Guias"
          component={GuiaScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="list-alt" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="Formulario de Inscripcion"
          component={InscFormScreen}
          options={{ tabBarButton: () => null }}
        />
        {/*
        <Tab.Screen
          name="Registro"
          component={RegisterScreen}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{ tabBarButton: () => null }}
        />      
        */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
