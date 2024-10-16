/* eslint-disable prettier/prettier */ 
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Barra superior con opciones */}
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => navigation.navigate('Solicitudes')}>
          Solicitudes
        </Text>
        <Text style={styles.headerText} onPress={() => navigation.navigate('Consultas')}>
          Consultas
        </Text>
      </View>
      <Text style={styles.title}>Módulo de Inscripciones</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#c4dafa",
  },
  header: {
    flexDirection: 'row', // Coloca los textos en fila
    justifyContent: 'space-around', // Espacio equitativo entre los textos
    width: '100%', // Ancho completo
    backgroundColor: '#ffffff', // Color de fondo blanco
    paddingVertical: 15, // Espaciado vertical
    borderBottomWidth: 1, // Borde inferior
    borderBottomColor: '#cccccc', // Color del borde
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005187', // Color del texto
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "center",
  },
});
