/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Text } from "react-native";
import AppNavigator from "./AppNavigator";
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

  // Retornar el AppNavigator
  return <AppNavigator />;
}
