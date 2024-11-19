/* eslint-disable prettier/prettier */ 
import React from "react";
import { Text, StyleSheet, Image, ScrollView, View } from "react-native";

/* ScrollView envuelve todo el contenido */
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <Text style={styles.title}>Instituto de Formación Docente</Text>
      <Text style={styles.subtitle}>"Profesorado de Educación Especial con Orientación en Sordos e Hipoacúsicos"</Text>
      
      {/* Añadir imagen después del subtítulo */}
      <Image
        source={require('../assets/Carrusel_1.jpg')} // Ruta de la imagen
        style={styles.image}  // Estilos para la imagen
      />
      
      {/* Misión de la organización */}
      <View style={styles.card}>
        <Text style={styles.titulomision}>Misión:</Text>
        <Text style={styles.mision}>
          “MEJORAR LA CALIDAD DE VIDA DE LAS PERSONAS CON DISCAPACIDAD AUDITIVA EN LA PROVINCIA DE SALTA A TRAVÉS DE UN SERVICIO INTEGRAL, 
          BASADO EN LOS VALORES INSTITUCIONALES DE LIBERTAD, HONESTIDAD,
          RESPETO, SOLIDARIDAD Y EFICIENCIA”
        </Text>
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
    fontSize: 39,
    fontWeight: "900",
    marginBottom: 6, // Espacio entre el título y el subtítulo
    textAlign: "center",
    textShadowColor: '#585858', // Color de la sombra
    textShadowOffset: { width: 1, height: 2 }, // Posición de la sombra
    textShadowRadius: 4, // Difusión de la sombra
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20, // Espacio entre el subtítulo y la imagen
    textShadowColor: '#585858', // Color de la sombra
    textShadowOffset: { width: 1, height: 1 }, // Posición de la sombra
    textShadowRadius: 5, // Difusión de la sombra
  },
  image: {
    width: 300,  // Ancho de la imagen
    height: 300, // Alto de la imagen
    marginBottom: 25, // Espacio debajo de la imagen
    backgroundColor: "#4d82bc"
  },
  card: {
    width: '92%',
    backgroundColor: '#ffffff', // Color de fondo de la carta
    padding: 20,
    borderRadius: 10,
    marginBottom: 20, // Espacio debajo de la carta
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10, // Añadir sombra en Android
  },
  titulomision:{
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  mision: {
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 28,
    fontStyle: "italic",
    fontSize: 15,
    fontWeight:"600",
  },
});
