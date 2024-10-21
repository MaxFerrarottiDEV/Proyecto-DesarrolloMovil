/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

const SolicitudFormScreen = () => {

    const [state, setState] = useState({
        nombre: '',
        apellido: '',
        DNI: '',
    })

    const handleChangeText = (nombre, value) => {
        setState({ ...state, [nombre]: value})
    }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput 
            placeholder="Nombre" 
            onChangeText={(value) => handleChangeText('nombre', value)}/>
      </View>
      <View style={styles.inputGroup}>
        <TextInput 
            placeholder="Apellido" 
            onChangeText={(value) => handleChangeText('apellido', value)}/>
      </View>
      <View style={styles.inputGroup}>
        <TextInput 
            placeholder="DNI"
            onChangeText={(value) => handleChangeText('dni', value)}/>
      </View>
      <View style={styles.inputGroup}>
        <Button title="Añadir solicitud" onPress={() => console.log(state)}/>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default SolicitudFormScreen