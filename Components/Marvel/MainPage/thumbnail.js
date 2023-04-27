import { Text, View, Image, Pressable } from "react-native";
import { listSytles } from "./marvelListStyles";

export default function HeroeThumbnail({ heroe, setHero, setShowHero }) {
  const foto = `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`;

  const heroClick = () => {
    setHero(heroe);
    setShowHero(true);
  };
  return (
    <Pressable onPress={() => heroClick()} style={listSytles.heroeWrapper}>
      <Image source={{ uri: foto }} style={listSytles.heroeThumbnail} />
      <Text style={listSytles.heroeName}>{heroe.name}</Text>
      <Text>{"Aparece en " + heroe.comics.available + " cómics"}</Text>
    </Pressable>
  );
}
