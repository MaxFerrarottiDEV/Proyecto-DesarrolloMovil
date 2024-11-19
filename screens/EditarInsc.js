/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet, Alert, TouchableOpacity, Text} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { db } from "./fb"; // Asegúrate de que la ruta de importación sea correcta
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Picker } from "@react-native-picker/picker"; // Importa Picker desde @react-native-picker/picker

const EditarInscripcion = ({ route, navigation }) => {
    const { inscripcionId } = route.params;

    const [state, setState] = useState({
        nombre: '',
        apellido: '',
        DNI: '',
        anio: ''
    });

    useEffect(() => {
        const fetchInscripcion = async () => {
            const docRef = doc(db, "inscripciones", inscripcionId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setState(docSnap.data()); // Inicializa el estado con los datos de Firestore
            } else {
                Alert.alert("No se encontraron los datos del estudiante.");
            }
        };

        fetchInscripcion();
    }, [inscripcionId]);

    const handleChangeText = (nombre, value) => {
        setState({ ...state, [nombre]: value });
    };

    const updateData = async () => {
        if (state.nombre === '' || state.apellido === '' || state.DNI === '' || state.anioInscripcion === '') {
            Alert.alert("Por favor, completa todos los campos.");
        } else {
            try {
                const docRef = doc(db, "inscripciones", inscripcionId);
                await updateDoc(docRef, {
                    nombre: state.nombre,
                    apellido: state.apellido,
                    DNI: state.DNI,
                    anio: state.anio,
                });
                Alert.alert("Datos actualizados exitosamente.");
                navigation.navigate('Inscripciones'); // Regresar a la pantalla de inscripciones
            } catch (error) {
                Alert.alert("Error al actualizar los datos", error.message);
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
                    selectedValue={state.anio} // Asegúrate de que este valor se inicialice correctamente
                    onValueChange={(itemValue) => handleChangeText('anio', itemValue)}
                >
                    <Picker.Item label="-Selecciona el año de inscripción-" value="" />
                    <Picker.Item label="Primer Año" value="Primer Año" />
                    <Picker.Item label="Segundo Año" value="Segundo Año" />
                    <Picker.Item label="Tercer Año" value="Tercer Año" />
                    <Picker.Item label="Cuarto Año" value="Cuarto Año" />
                </Picker>
            </View>
            <View style={styles.inputGroup}>
                <Button title="Actualizar solicitud" onPress={updateData} />
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
});

export default EditarInscripcion;

