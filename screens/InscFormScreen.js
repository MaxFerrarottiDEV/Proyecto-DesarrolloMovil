/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet, Alert } from "react-native";
import { db } from "./fb"; // Revisa que la ruta de importación sea correcta
import { collection, addDoc } from 'firebase/firestore';

const InscFormScreen = () => {
    const [state, setState] = useState({
        nombre: '',
        apellido: '',
        DNI: '',
    });

    const handleChangeText = (nombre, value) => {
        setState({ ...state, [nombre]: value });
    };

    const saveData = async () => {
        if (state.nombre === '' || state.apellido === '' || state.DNI === '') {
            Alert.alert("Por favor, completa todos los campos.");
        } else {
            try {
                await addDoc(collection(db, 'inscripciones'), {
                    nombre: state.nombre,
                    apellido: state.apellido,
                    DNI: state.DNI,
                });
                Alert.alert("Solicitud añadida exitosamente.");
                setState({ nombre: '', apellido: '', DNI: '' });
            } catch (error) {
                Alert.alert("Error al guardar la solicitud", error.message);
            }
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Nombre" 
                    value={state.nombre}
                    onChangeText={(value) => handleChangeText('nombre', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Apellido" 
                    value={state.apellido}
                    onChangeText={(value) => handleChangeText('apellido', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="DNI"
                    value={state.DNI}
                    onChangeText={(value) => handleChangeText('DNI', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <Button title="Añadir solicitud" onPress={saveData} />
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
        borderBottomColor: '#cccccc',
    },
});

export default InscFormScreen;
