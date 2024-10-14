/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import RegisterScreen from "./RegisterScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#005187" }, // Color de fondo de la barra de navegación
          tabBarActiveTintColor: "#ffffff", // Color de las letras activas
          tabBarInactiveTintColor: "#ffffff", // Color de las letras inactivas
        }}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Inscripciones" component={RegisterScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
