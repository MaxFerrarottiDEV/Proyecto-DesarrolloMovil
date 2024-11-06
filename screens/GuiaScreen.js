/* eslint-disable prettier/prettier */ 
import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

/* ScrollView envuelve todo el contenido */
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <Text style={styles.title}>Lista de Funciones</Text>
      {/* Carta de presentación */}
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
          Muestra todos los registros de inscripciones almacenados, organizados alfabéticamente. Permite visualizar los datos principales de cada estudiante (nombre, apellido, DNI y año de inscripción), y ofrece funciones para buscar y filtrar por criterios específicos (nombre, apellido, DNI y año). También incluye opciones de acción para editar o eliminar inscripciones, proporcionando un control completo sobre el listado de estudiantes.
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
    marginBottom: 15, // Espacio entre el título y el subtítulo
  },
  card: {
    width: '80%',
    backgroundColor: '#ffffff', // Color de fondo de la carta
    padding: 20,
    borderRadius: 10,
    marginBottom: 20, // Espacio debajo de la carta
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Añadir sombra en Android
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
