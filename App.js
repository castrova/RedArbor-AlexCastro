import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Autenticacion from "./Components/Autenticacion/autenticacion";
import MarvelList from "./Components/Marvel/MainPage/marvelList";

export default function App() {
  const [logged, setLogged] = useState(false);

  return (
    <View style={styles.container}>
      {logged ? <MarvelList /> : <Autenticacion setLogged={setLogged} />}
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
