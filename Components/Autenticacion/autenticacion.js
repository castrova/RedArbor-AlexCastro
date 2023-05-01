import { Text, View, TextInput, Pressable, Image } from "react-native";
import { AuthStyles } from "./autenticacionStyles";
import { useState } from "react";
import { users } from "../../Users/users";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Autenticacion({ setLogged, setUser }) {
  const [mail, setMail] = useState(""); //Input de mail
  const [passWord, setPassWord] = useState(""); //Input de password
  const [message, setMessage] = useState(""); //Mensaje que se mostrará al introducir credenciales

  //Función que guarda el usuario logeado en el almacenamiento local
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("logged", value);
    } catch (e) {
      console.log(e);
    }
  };

  //Función que comprueba los credenciales introducidos y los procesa
  loginPress = () => {
    let formatMail = mail.toLowerCase().trim();
    let userFound = false;

    users.forEach((user) => {
      if (user.mail === formatMail && user.password === passWord) {
        //Si el login es correcto
        storeData(user.id);
        setUser(user);
        setMessage(`Bienvenido de nuevo ${user.name}!`);
        setTimeout(() => {
          setLogged(true);
        }, 2000);
        userFound = true;
      }
    });

    if (!userFound) {
      // Si el login es incorrecto
      setMessage("El correo o la contraseña es incorrecta");
    }

    //Limpiamos el mensaje tras 4 segundos
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  return (
    <View style={AuthStyles.container}>
      <View style={AuthStyles.titleWrapper}>
        <Text style={AuthStyles.title}>Login</Text>
      </View>
      <View>
        <View style={AuthStyles.fields}>
          <Text>Correo</Text>
          <TextInput
            placeholder="Escribe tu correo..."
            style={AuthStyles.input}
            onChange={(e) => setMail(e.nativeEvent.text)}
          />
        </View>
        <View style={AuthStyles.fields}>
          <Text>Contraseña</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Escribe tu contraseña..."
            style={AuthStyles.input}
            onChange={(e) => setPassWord(e.nativeEvent.text)}
          />
        </View>
      </View>
      <Pressable
        onPress={() => loginPress()}
        style={AuthStyles.button}
        title="Continuar"
      >
        <Text style={AuthStyles.buttonText}>CONTINUAR</Text>
      </Pressable>
      <Text>{message}</Text>
    </View>
  );
}
