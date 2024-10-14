/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instituto de Formacion Docente</Text>
      <Text style={styles.subtitle}>Profesorado de Educación Especial con Orientación en Sordos e Hipoacúsicos</Text>
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
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
  }
});
