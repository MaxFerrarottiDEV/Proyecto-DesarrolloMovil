/* eslint-disable prettier/prettier */ 
import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

/* ScrollView envuelve todo el contenido */
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}> 
      {/* Carta de presentación */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Inscripciones - Solicitudes de Preinscripcion:</Text>
        <Text style={styles.cardText}>
          Permite gestionar inscripciones de candidatos mediante un formulario integrado en la plataforma. Una vez completada la solicitud, esta se registra automáticamente en la tabla de 
          solicitudes para su seguimiento y gestión.
        </Text>
        <Button
          title="Ir a Solicitudes"
          onPress={() => navigation.navigate("Solicitudes")}
          color="#005187" // Color del botón
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Inscripciones - Consultas de Datos estudiantiles:</Text>
        <Text style={styles.cardText}>
          Proporciona una tabla con el listado completo de los estudiantes inscritos en el profesorado. Además, permite adjuntar un legajo digital, modificar la información del estudiante 
          y eliminar su registro en caso de abandono de la carrera.
        </Text>
        <Button
          title="Ir a Consultas"
          onPress={() => navigation.navigate("Solicitudes")}
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
    marginBottom: 10, // Espacio entre el título y el subtítulo
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20, // Espacio entre el subtítulo y la imagen
  },
  image: {
    width: 300,  // Ancho de la imagen
    height: 300, // Alto de la imagen
    marginBottom: 25, // Espacio debajo de la imagen
    backgroundColor: "#4d82bc"
  },
  titulomision:{
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  mision: {
    textAlign: "center",
    marginBottom: 30,
    fontStyle: "italic"
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
