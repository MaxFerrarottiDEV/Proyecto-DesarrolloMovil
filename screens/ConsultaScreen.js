/* eslint-disable prettier/prettier */ 
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo de Consultas</Text>
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
