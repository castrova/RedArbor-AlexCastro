import { StyleSheet } from "react-native";

export const listSytles = StyleSheet.create({
  heroeContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 40,
  },
  loadingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroeWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    width: "49%",
    marginBottom: 10,
  },
  heroeThumbnail: {
    width: "100%",
    aspectRatio: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  heroeName: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
