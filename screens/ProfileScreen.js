/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, Alert, TextInput, Modal } from "react-native";
import { getAuth, signOut, updatePassword, onAuthStateChanged } from "firebase/auth"; // Importar Firebase Authentication
import { useNavigation } from "@react-navigation/native"; // Importar navegación
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Importar Firestore

export default function ProfileScreen() {
  const navigation = useNavigation(); // Hook para navegación
  const auth = getAuth(); // Obtener instancia de Firebase Auth
  const db = getFirestore(); // Instancia de Firestore

  const [userData, setUserData] = useState({ name: "", apellido: "" }); // Estado para guardar el nombre y apellido del usuario
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar el modal
  const [newPassword, setNewPassword] = useState(""); // Estado para la nueva contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para la confirmación de la contraseña

  // Obtener datos del usuario desde Firestore
  const fetchUserData = async (uid) => {
    try {
      const userDoc = doc(db, "usuarios", uid); // Ruta del documento
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData({ name: data.name, apellido: data.apellido }); // Actualizar estado con los datos
      } else {
        console.error("No se encontró el documento del usuario.");
        setUserData({ name: "", apellido: "" }); // Reiniciar estado si no se encuentra
      }
    } catch (error) {
      console.error("Error al obtener datos del usuario:", error.message);
      setUserData({ name: "", apellido: "" }); // Reiniciar estado en caso de error
    }
  };

  // Escuchar cambios en el usuario autenticado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.uid); // Obtener datos del usuario actual
      } else {
        setUserData({ name: "", apellido: "" }); // Reiniciar datos si no hay usuario
      }
    });

    return unsubscribe; // Limpiar el listener al desmontar
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = async () => {
    try {
      await signOut(auth); // Cerrar sesión con Firebase
      navigation.navigate("Login"); // Redirigir al LoginScreen
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
      alert("Ocurrió un error al intentar cerrar sesión.");
    }
  };

  // Función para cambiar la contraseña
  const handleChangePassword = async () => {
    try {
      const user = auth.currentUser; // Obtener usuario actual
      if (user) {
        // Verificar si las contraseñas coinciden
        if (newPassword !== confirmPassword) {
          Alert.alert("Error", "Las contraseñas no coinciden.");
          return;
        }

        // Validar los requisitos de la contraseña
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; // Al menos una minúscula, una mayúscula, un número y mínimo 6 caracteres
      if (!passwordRegex.test(newPassword)) {
        Alert.alert(
          "Error",
          "La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número."
        );
        return;
      }

        // Actualizar la contraseña
        await updatePassword(user, newPassword);
        Alert.alert("Éxito", "Contraseña actualizada correctamente.");
        setModalVisible(false); // Cerrar el modal
        setNewPassword(""); // Limpiar el campo de nueva contraseña
        setConfirmPassword(""); // Limpiar el campo de confirmación de contraseña
      } else {
        Alert.alert("Error", "No se encontró al usuario actual.");
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error.message);
      Alert.alert("Error", "No se pudo cambiar la contraseña.");
    }
  };


  return (

    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/perfil.png")} // Ruta de la imagen
          style={styles.image} // Estilos para la imagen
        />
        <Text style={styles.nombre_perfil}>
          Hola, {userData.name} {userData.apellido}
        </Text>
        {/* Hacer el texto pulsable con TouchableOpacity */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.change_password}>Cambiar contraseña</Text>
        </TouchableOpacity>
        <Button
          title="Cerrar Sesión"
          onPress={handleLogout} // Llamar a la función handleLogout
          color="#ff0000" // Color del botón
        />
      </View>

      {/* Modal para cambiar contraseña */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)} // Cerrar el modal al presionar atrás
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cambiar contraseña</Text>

            {/* Campo de nueva contraseña */}
            <TextInput
              placeholder="Nueva contraseña"
              secureTextEntry
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
            />

            {/* Campo de confirmación de contraseña */}
            <TextInput
              placeholder="Confirmar contraseña"
              secureTextEntry
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <View style={styles.modalButtons}>
              <Button title="Cancelar" color="#777" onPress={() => setModalVisible(false)} />
              <Button title="Aceptar" color="#005187" onPress={handleChangePassword} />
            </View>
          </View>
        </View>
      </Modal>
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
  image: {
    width: 250, // Ancho de la imagen
    height: 250, // Alto de la imagen
    marginBottom: 2, // Espacio debajo de la imagen
  },
  nombre_perfil: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  change_password: {
    fontSize: 16, // Tamaño de la fuente (ajustable)
    color: "#0000ff", // Añadir color para distinguirlo como un link
    textDecorationLine: "underline", // Subrayar el texto
    marginBottom: 20, // Espacio debajo del texto
  },
  card: {
    width: "95%",
    backgroundColor: "#ffffff", // Color de fondo de la carta
    padding: 20,
    marginBottom: 20, // Espacio debajo de la carta
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10, // Añadir sombra en Android
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});