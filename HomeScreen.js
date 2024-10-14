/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instituto de Formación Docente</Text>
      <Text style={styles.subtitle}>Profesorado de Educación Especial con Orientación en Sordos e Hipoacúsicos</Text>
      
      {/* Añadir imagen después del subtítulo */}
      <Image
        source={require('./assets/Carrusel_1.jpg')} // Ruta de la imagen
        style={styles.image}  // Estilos para la imagen
      />
      
      {/* Carta de presentación */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Inscripciones:</Text>
        <Text style={styles.cardText}>
          Permite gestionar solicitudes de inscripción de nuevos candidatos y revisar o actualizar la información de los estudiantes ya registrados.
        </Text>
        <Button
          title="Ir a Inscripciones"
          onPress={() => navigation.navigate("Inscripciones")}
          color="#005187" // Color del botón
        />
      </View>
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
    marginBottom: 10, // Espacio entre el título y el subtítulo
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20, // Espacio entre el subtítulo y la imagen
  },
  image: {
    width: 300,  // Ancho de la imagen
    height: 300, // Alto de la imagen
    marginBottom: 20, // Espacio debajo de la imagen
    backgroundColor: "#4d82bc"
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
    marginBottom: 10, // Espacio debajo del título
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20, // Espacio debajo del texto
  },
});
