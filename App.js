import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import Autenticacion from "./Components/Authentication/authentication";
import MarvelList from "./Components/Marvel/MainPage/marvelList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { users } from "./Components/Users/users";

export default function App() {
  const [logged, setLogged] = useState(false); // Variable que define si hay un usuario logeado
  const [user, setUser] = useState({}); // Información del usuario logeado

  //Función que comprueba si hay usuario en el almacenamiento local
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("logged");
      if (value !== null) {
        setLogged(true);
        let user = users.find((user) => {
          return user.id == value;
        });
        setUser(user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //Función que se lanza al ejecutar la app y busca usuario en el almacenamiento local
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {logged ? (
        <MarvelList user={user} setLogged={setLogged} />
      ) : (
        <Autenticacion setLogged={setLogged} setUser={setUser} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 40,
  },
});
