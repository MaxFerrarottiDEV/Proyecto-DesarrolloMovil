import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import saludo from "./assets/saludo.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={saludo}
        style={{
          width: 100,
          height: 100,
          resizeMode: "center",
        }}
      />
      <Text>Hola, Bienvenido a mi primera APP</Text>
      <StatusBar style="auto" />
      <Button
        title="Boton Nativo - Pulsa aquí"
        onPress={() => alert("Funcion en progreso...")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
