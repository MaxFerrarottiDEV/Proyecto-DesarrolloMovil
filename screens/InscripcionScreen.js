/* eslint-disable prettier/prettier */ 
import React from "react";
import { View, StyleSheet, Button } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Botón para ir a la pantalla de SolicitudFormScreen */}
      <Button
        title="Agregar inscripcion"
        onPress={() => navigation.navigate('SolicitudFormScreen')}  // Navegar hacia la pantalla de SolicitudFormScreen
        color="#005187" // Cambia el color del botón si lo deseas
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4dafa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "center",
  },
});
