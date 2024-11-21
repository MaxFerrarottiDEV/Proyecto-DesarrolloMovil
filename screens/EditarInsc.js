import React, { useState, useEffect } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { db } from "./fb"; // Asegúrate de que la ruta de importación sea correcta
import { doc, getDoc, updateDoc } from "firebase/firestore";

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
        if (state.nombre === '' || state.apellido === '' || state.DNI === '' || state.anio === '') {
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

    const anios = ["Primer Año", "Segundo Año", "Tercer Año", "Cuarto Año"]; // Años disponibles

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Inscripciones')}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    <Text style={{ fontSize: 20, marginLeft: 8 }}>Volver</Text>
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
            
            <Text style={styles.label}>Selecciona el Año de Inscripción:</Text>
            <View style={styles.listContainer}>
                {anios.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.option, state.anio === item && styles.optionSelected]}
                        onPress={() => handleChangeText("anio", item)}
                    >
                        <Text style={[styles.optionText, state.anio === item && styles.optionTextSelected]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.botonGuardar} onPress={updateData}>
                <Text style={styles.textoBotonGuardar}>Actualizar solicitud</Text>
            </TouchableOpacity>

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
        marginVertical: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10,
    },
    listContainer: {
        marginTop: 10,
    },
    option: {
        padding: 15,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    optionSelected: {
        borderColor: "#005187",
        backgroundColor: "#eaf4fb",
    },
    optionText: {
        fontSize: 16,
        color: "#333",
    },
    optionTextSelected: {
        fontWeight: "bold",
        color: "#005187",
    },
    botonGuardar: {
        marginTop: 40,
        marginBottom: 40,
        padding: 15,
        borderRadius: 20, 
        backgroundColor: "#005187", 
        width: "50%", 
        alignSelf: "center", 
        alignItems: "center", 
    },
    textoBotonGuardar: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
});

export default EditarInscripcion;
