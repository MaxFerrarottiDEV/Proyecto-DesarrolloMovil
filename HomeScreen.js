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
      
      <Button
        title="Ir a Materias"
        onPress={() => navigation.navigate("Materias")}
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
});
