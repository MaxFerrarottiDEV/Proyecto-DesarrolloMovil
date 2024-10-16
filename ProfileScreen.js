/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity,} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/perfil.png')} // Ruta de la imagen
        style={styles.image}  // Estilos para la imagen
      />
      <Text style={styles.nombre_perfil}>Hola, (nombre de usuario)</Text>

      {/* Contenedor para alinear ambos textos pulsables */}
      <View style={styles.rowContainer}>
        {/* Hacer el texto pulsable con TouchableOpacity */}
        <TouchableOpacity onPress={() => alert("Funcion en progreso...")}>
          <Text style={styles.change_password}>Cambiar contraseña</Text>
        </TouchableOpacity>

        {/* Hacer el texto pulsable con TouchableOpacity */}
        <TouchableOpacity onPress={() => alert("Funcion en progreso...")}>
          <Text style={styles.change_username}>Cambiar nombre de usuario</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Cerrar Sesión"
        onPress={() => alert("Cerrando Sesion...")}
        color="#ff0000" // Color del botón
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
  image: {
    width: 250,  // Ancho de la imagen
    height: 250, // Alto de la imagen
    marginBottom: 2, // Espacio debajo de la imagen
  },
  nombre_perfil: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  rowContainer: {
    flexDirection: 'row', // Coloca los textos en fila
    justifyContent: 'space-between', // Espacio entre los textos
    width: '80%', // Ajusta el ancho del contenedor
    marginBottom: 40,
  },
  change_password: {
    fontSize: 16, // Tamaño de la fuente (ajustable)
    flex: 1, // Esto asegura que ocupe espacio equitativo
    color: "#0000ff", // Añadir color para distinguirlo como un link
    textDecorationLine: 'underline', // Subrayar el texto
  },
  change_username: {
    fontSize: 16, // Tamaño de la fuente (ajustable)
    flex: 1, // Esto asegura que ocupe espacio equitativo
    textAlign: 'right', // Alinea el texto a la derecha
    color: "#0000ff", // Añadir color para distinguirlo como un link
    textDecorationLine: 'underline', // Subrayar el texto
  },
});
