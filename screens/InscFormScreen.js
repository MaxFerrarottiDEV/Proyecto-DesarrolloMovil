/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // Importar navegación
import { db } from "./fb"; // Revisa que la ruta de importación sea correcta
import { collection, addDoc } from "firebase/firestore";


const InscFormScreen = () => {
    const navigation = useNavigation(); // Crear objeto de navegación
    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        DNI: "",
        anio: "", // Añadir campo de año de inscripción
    });

    const handleChangeText = (nombre, value) => {
        setState({ ...state, [nombre]: value });
    };

    const saveData = async () => {
        if (state.nombre === "" || state.apellido === "" || state.DNI === "" || state.anio === "") {
            Alert.alert("Por favor, complete todos los campos.");
        } else {
            try {
                await addDoc(collection(db, "inscripciones"), {
                    nombre: state.nombre,
                    apellido: state.apellido,
                    DNI: state.DNI,
                    anio: state.anio, // Enviar año de inscripción
                });
                Alert.alert("Estudiante agregado exitosamente.");
                setState({ nombre: "", apellido: "", DNI: "", anio: "" });
            } catch (error) {
                Alert.alert("Error al agregar al estudiante", error.message);
            }
        }
    };

    const anios = ["Primer Año", "Segundo Año", "Tercer Año", "Cuarto Año"];

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Inscripciones")}>
                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 15 }}>
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    <Text style={{ fontSize: 20, marginLeft: 8 }}>Volver</Text>
                </View>
            </TouchableOpacity>
            <View style={[styles.inputGroup, { marginBottom: 30 }]}>
    <TextInput
        placeholder="Nombre"
        value={state.nombre}
        onChangeText={(value) => handleChangeText("nombre", value)}/>
    </View>
    <View style={[styles.inputGroup, { marginBottom: 30 }]}>
        <TextInput
            placeholder="Apellido"
            value={state.apellido}
            onChangeText={(value) => handleChangeText("apellido", value)}/>
    </View>
    <View style={[styles.inputGroup, { marginBottom: 30 }]}>
        <TextInput
            placeholder="DNI"
            value={state.DNI}
            onChangeText={(value) => handleChangeText("DNI", value)}/>
    </View>
            <Text style={styles.label}>Selecciona el Año de Inscripción:</Text>
            <View style={styles.listContainer}>
                {anios.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.option,
                            state.anio === item && styles.optionSelected,]}
                        onPress={() => handleChangeText("anio", item)}>
                        <Text
                            style={[
                                styles.optionText,
                                state.anio === item && styles.optionTextSelected,]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.botonAgregar}>
                <TouchableOpacity  onPress={saveData}>
                    <Text style={styles.textoBotonAgregar}>Añadir Estudiante</Text>
                </TouchableOpacity>
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
    botonAgregar: {
        marginTop: 40,
        marginBottom: 40,
        padding: 15,
        borderRadius: 20, 
        backgroundColor: "#005187", 
        width: "50%", 
        alignSelf: "center", 
        alignItems: "center", 
    },

    textoBotonAgregar: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
});


export default InscFormScreen;
