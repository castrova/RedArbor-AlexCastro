import { Text, View, TextInput, Pressable, Image } from "react-native";
import { AuthStyles } from "./autenticacionStyles";
import { mailImage } from "../../Images/mail.png";
import { useState } from "react";

export default function Autenticacion(props) {
  const [mail, setMail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [message, setMessage] = useState("");

  loginPress = () => {
    if (mail === "A" && passWord === "A") {
      //Si el login es correcto
      setMessage("Login correcto! Redirigiendo...");
      setTimeout(() => {
        props.setLogged(true);
      }, 2000);
    } else {
      //Si el login es incorrecto
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
