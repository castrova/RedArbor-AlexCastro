import { StyleSheet } from "react-native";

export const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
  },
  input: {
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    paddingLeft: 10,
  },
  title: {
    fontSize: 30,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 300,
    height: 40,
    backgroundColor: "#f0131E",
    borderRadius: 3,
  },
  buttonText: {
    color: "white",
  },
  fields: {
    width: 300,
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    marginBottom: 35,
  },
});
