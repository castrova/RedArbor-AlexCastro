import { Text, View, Pressable } from "react-native";
import { listSytles } from "./marvelListStyles";

export default function UserPage({ user, setLogged, setModal }) {
  const deleteData = async (value) => {
    try {
      await AsyncStorage.removeItem("logged");
    } catch (e) {
      console.log(e);
    }
  };

  const logOutPress = () => {
    deleteData();
    setLogged(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <View style={listSytles.userModal}>
      <Pressable style={listSytles.closeModal} onPress={() => closeModal()}>
        <Text>X</Text>
      </Pressable>
      <View style={{ display: "flex" }}>
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
