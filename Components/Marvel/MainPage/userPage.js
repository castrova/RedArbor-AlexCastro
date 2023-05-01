import { Text, View, Pressable, Image } from "react-native";
import { listSytles } from "./marvelListStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserPage({ user, setLogged, setModal }) {
  //Función encargada de borrar la información del almacenamiento local al cerrar sesión.
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem("logged");
    } catch (e) {
      console.log(e);
    }
  };

  //Función encargada de gestionar el logout
  const logOutPress = async () => {
    await deleteData();
    setLogged(false);
  };

  //Cerrar el modal de usuario
  const closeModal = () => {
    setModal(false);
  };

  return (
    <View style={listSytles.userModal}>
      <Pressable style={listSytles.closeModal} onPress={() => closeModal()}>
        <Image
          source={require("../../Images/close.png")}
          style={listSytles.closeImg}
        />
      </Pressable>
      <View>
        <Text style={listSytles.userName}>
          {user.name + " " + user.lastName}
        </Text>
      </View>
      <Pressable style={listSytles.logOutButton} onPress={() => logOutPress()}>
        <Text style={listSytles.logOutText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}
