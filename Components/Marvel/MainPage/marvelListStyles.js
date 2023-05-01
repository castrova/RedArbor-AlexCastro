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
    alignItems: "center",
    justifyContent: "center",
  },
  heroeWrapper: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    width: "49%",
    marginBottom: 10,
  },
  heroeThumbnail: {
    width: "100%",
    aspectRatio: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  heroeName: {
    textAlign: "center",
    fontWeight: "bold",
  },
  userButton: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  userImg: {
    width: 35,
    height: 35,
    tintColor: "black",
  },
  userModal: {
    position: "absolute",
    alignItems: "center",
    right: 5,
    borderRadius: 5,
    borderWidth: 1,
    top: 40,
    padding: 10,
    width: "75%",
    zIndex: 2,
    backgroundColor: "white",
  },
  userName: {
    fontSize: 20,
    marginBottom: 50,
  },
  logOutButton: {
    backgroundColor: "#f0131E",
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  logOutText: {
    color: "white",
    fontSize: 18,
  },
  closeModal: {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
  },
});
