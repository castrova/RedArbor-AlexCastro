import { StyleSheet } from "react-native";

export const heroStyles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  comicWrapper: {
    width: "30%",
    marginBottom: 15,
    display: "flex",
    alignItems: "center",
  },
  comicImg: { width: 150, aspectRatio: 1 },
  closeImg: { width: 30, height: 30 },
  heroWrapper: { alignItems: "center", marginBottom: 20 },
  heroImg: { width: "70%", aspectRatio: 1 },
});
