/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet, Alert, TouchableOpacity, Text} from "react-native";
import { Picker } from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native"; // Importar navegación
import { db } from "./fb"; // Revisa que la ruta de importación sea correcta
import { collection, addDoc } from 'firebase/firestore';

const InscFormScreen = () => {
    const navigation = useNavigation(); // Crear objeto de navegación
    const [state, setState] = useState({
        nombre: '',
        apellido: '',
        DNI: '',
        anio: '', // Añadir campo de año de inscripción
    });

    const handleChangeText = (nombre, value) => {
        setState({ ...state, [nombre]: value });
    };

    const saveData = async () => {
        if (state.nombre === '' || state.apellido === '' || state.DNI === '' || state.anio === '') {
            Alert.alert("Por favor, complete todos los campos.");
        } else {
            try {
                await addDoc(collection(db, 'inscripciones'), {
                    nombre: state.nombre,
                    apellido: state.apellido,
                    DNI: state.DNI,
                    anio: state.anio, // Enviar año de inscripción
                });
                Alert.alert("Estudiante agregado exitosamente.");
                setState({ nombre: '', apellido: '', DNI: '', anio: '' });
            } catch (error) {
                Alert.alert("Error al agregar al estudiante", error.message);
            }
        }
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Inscripciones')}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    <Text style={{fontSize: 16, marginLeft: 8 }}>
                        Volver
                    </Text>
                </View>
            </TouchableOpacity>
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
                <Picker
                    selectedValue={state.anio}
                    onValueChange={(value) => handleChangeText('anio', value)}
                >
                    <Picker.Item label="-Selecciona el Año de Inscripción-" value="" />
                    <Picker.Item label="Primer Año" value="Primer Año" />
                    <Picker.Item label="Segundo Año" value="Segundo Año" />
                    <Picker.Item label="Tercer Año" value="Tercer Año" />
                    <Picker.Item label="Cuarto Año" value="Cuarto Año" />
                </Picker>
            </View>
            <View style={[styles.inputGroup, styles.buttonContainer]}>
                <Button title="Añadir Estudiante" onPress={saveData} color="#005187" />
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
        marginTop: 30,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    buttonContainer: {
        width: '50%', // Cambia este valor para ajustar el tamaño
        alignSelf: 'center', // Centra el botón horizontalmente
    },    
});

export default InscFormScreen;
