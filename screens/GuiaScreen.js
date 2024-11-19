/* eslint-disable prettier/prettier */ 
import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

/* ScrollView envuelve todo el contenido */
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <Text style={styles.title}>Funcionalidades</Text>
      {/* Carta de presentación */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Perfil de usuario</Text>
        <Text style={styles.cardText}>
          Permite cambiar la contraseña y cerrar sesión.
        </Text>
        <Button
          title="Ir al Perfil"
          onPress={() => navigation.navigate("Perfil")}
          color="#005187" // Color del botón
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Inscripciones - Formulario de Inscripcion:</Text>
        <Text style={styles.cardText}>
          Permite a los usuarios registrar y gestionar estudiantes ingresando sus datos personales (como nombre, apellido, DNI y año de inscripción) 
        </Text>
        <Button
          title="Ir al Formulario"
          onPress={() => navigation.navigate("Formulario de Inscripcion")}
          color="#005187" // Color del botón
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Inscripciones - Lista de Estudiantes:</Text>
        <Text style={styles.cardText}>
          Visualiza todos los registros de inscripciones ordenados alfabéticamente, mostrando nombre, apellido, DNI y año de inscripción. Permite buscar, filtrar y realizar acciones de edición o eliminación para gestionar las inscripciones.
        </Text>
        <Button
          title="Ir al Listado"
          onPress={() => navigation.navigate("Inscripciones")}
          color="#005187" // Color del botón
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4dafa",
    paddingVertical: 20, // Añadir padding para evitar que el contenido esté pegado a los bordes
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25, // Espacio entre el título y el subtítulo
    textShadowColor: '#585858', // Color de la sombra
    textShadowOffset: { width: 1, height: 1 }, // Posición de la sombra
    textShadowRadius: 5, // Difusión de la sombra
  },
  card: {
    width: '80%',
    backgroundColor: '#ffffff', // Color de fondo de la carta
    padding: 20,
    borderRadius: 10,
    marginBottom: 30, // Espacio debajo de la carta
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10, // Añadir sombra en Android
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10, // Espacio debajo del título
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20, // Espacio debajo del texto
  },
});
