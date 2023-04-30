import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import Autenticacion from "./Components/Autenticacion/autenticacion";
import MarvelList from "./Components/Marvel/MainPage/marvelList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { users } from "./Users/users";

export default function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("logged");
      if (value !== null) {
        setLogged(value);
        let user = users.find((user) => {
          user.id === value;
        });
        console.log(user);
        setUser(user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

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
