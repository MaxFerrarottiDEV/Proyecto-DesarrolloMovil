/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import AppNavigator from "./screens/AppNavigator";
import { useFonts, Rubik_400Regular } from "@expo-google-fonts/rubik";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // Prevenir que la pantalla de carga se oculte automáticamente

export default function App() {
  // Cargar la fuente Rubik
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });

  // Manejar la pantalla de carga
  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Ocultar la pantalla de carga cuando las fuentes estén listas
      }
    };

    hideSplashScreen();
  }, [fontsLoaded]); // Ejecutar este efecto cuando las fuentes cambien

  // Aplicar Rubik como fuente predeterminada en todos los Text
  const defaultTextProps = Text.defaultProps || {};
  defaultTextProps.style = { fontFamily: "Rubik_400Regular" };
  Text.defaultProps = defaultTextProps;

  // Mostrar una pantalla de carga temporal si las fuentes no están listas
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" /> 
      </View>
    );
  }

  // Retornar el AppNavigator cuando las fuentes estén cargadas
  return <AppNavigator />;
}

