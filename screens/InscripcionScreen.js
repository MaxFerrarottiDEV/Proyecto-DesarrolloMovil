/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Alert, TextInput } from "react-native";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./fb";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Picker } from "@react-native-picker/picker"; // Importar el Picker

export default function InscripcionScreen({ navigation }) {
  const [inscripciones, setInscripciones] = useState([]);
  const [filteredInscripciones, setFilteredInscripciones] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedYear, setSelectedYear] = useState("Todos los años"); // Valor inicial "Todos los años"

  const fetchInscripciones = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "inscripciones"));
      const inscripcionesList = [];
      querySnapshot.forEach((doc) => {
        inscripcionesList.push({ id: doc.id, ...doc.data() });
      });

      // Ordenar alfabéticamente por Nombre y luego por Apellido
      inscripcionesList.sort((a, b) => {
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
        if (a.apellido.toLowerCase() < b.apellido.toLowerCase()) return -1;
        if (a.apellido.toLowerCase() > b.apellido.toLowerCase()) return 1;
        return 0;
      });

      setInscripciones(inscripcionesList);
      setFilteredInscripciones(inscripcionesList); // Inicializar la lista filtrada
    } catch (error) {
      console.error("Error al obtener inscripciones:", error);
    }
  };

  useEffect(() => {
    fetchInscripciones();
  }, []);

  const handleDelete = async (id) => {
    Alert.alert(
      "Eliminar inscripción",
      "¿Desea eliminar a este estudiante de la lista?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Sí",
          onPress: async () => {
            try {
              await deleteDoc(doc(db, "inscripciones", id));
              setInscripciones(inscripciones.filter((inscripcion) => inscripcion.id !== id));
              setFilteredInscripciones(filteredInscripciones.filter((inscripcion) => inscripcion.id !== id));
              Alert.alert("Inscripción eliminada");
            } catch (error) {
              console.error("Error al eliminar inscripción:", error);
            }
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  const filterInscripciones = (text) => {
    setSearchText(text);
    applyFilters(text, selectedYear);
  };

  const filterByYear = (year) => {
    setSelectedYear(year);
    applyFilters(searchText, year); // Filtra según el año
  };

  const applyFilters = (text, year) => {
    const filteredData = inscripciones.filter((item) => {
      const matchesText =
        item.nombre.toLowerCase().includes(text.toLowerCase()) ||
        item.apellido.toLowerCase().includes(text.toLowerCase()) ||
        item.DNI.includes(text);
      
      // Incluye todos los años si year es "Todos los años"
      const matchesYear = year === "Todos los años" || item.anio === year;

      return matchesText && matchesYear;
    });
    setFilteredInscripciones(filteredData);
  };

  const renderInscripcion = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nombre}</Text>
      <Text style={styles.cell}>{item.apellido}</Text>
      <Text style={styles.cell}>{item.DNI}</Text>
      <Text style={styles.cell}>{item.anio}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.navigate('EditarInscripcion', { inscripcionId: item.id })}>
          <Entypo name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <MaterialIcons name="delete-forever" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={fetchInscripciones} style={styles.refreshButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
             <FontAwesome name="refresh" size={24} color="black" />
              <Text style={{fontSize: 16, marginLeft: 8 }}>
                Actualizar
              </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.addButtonContainer}>
          <Button
            title="Agregar Estudiante"
            onPress={() => navigation.navigate('Formulario de Inscripcion')}
            color="#005187"
          />
        </View>
      </View>
      
      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por Nombre, Apellido o DNI"
        value={searchText}
        onChangeText={filterInscripciones}
      />

      {/* Filtro de Año */}
      <Picker
        selectedValue={selectedYear}
        onValueChange={(itemValue) => filterByYear(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Todos los años" value="Todos los años" />
        <Picker.Item label="Primer Año" value="Primer Año" />
        <Picker.Item label="Segundo Año" value="Segundo Año" />
        <Picker.Item label="Tercer Año" value="Tercer Año" />
        <Picker.Item label="Cuarto Año" value="Cuarto Año" />
      </Picker>

      <Text style={styles.title}>Lista de Estudiantes (A-Z)</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Nombre</Text>
        <Text style={styles.headerCell}>Apellido</Text>
        <Text style={styles.headerCell}>DNI</Text>
        <Text style={styles.headerCell}>Año</Text>
        <Text style={styles.headerCell}>Acciones</Text>
      </View>
      <FlatList
        data={filteredInscripciones}
        renderItem={renderInscripcion}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.noDataText}>No hay inscripciones disponibles</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#c4dafa",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  refreshButton: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  addButtonContainer: {
    flex: 0.5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  picker: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#005187",
    padding: 10,
    borderRadius: 5,
  },
  headerCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    marginVertical: 5,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%",
  },
  noDataText: {
    textAlign: "center",
    color: "#333",
    marginTop: 20,
  },
});