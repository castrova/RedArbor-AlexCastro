import {
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { heroStyles } from "./heroStyles";
import { useEffect, useState } from "react";
import { fetchComics } from "../utiles";

export default function Hero({ hero, setShowHero }) {
  const [comics, setComics] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const foto = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

  useEffect(() => {
    getComics();
  }, [page]);

  async function getComics() {
    setLoading(true);
    const res = await fetchComics(page, hero.id);
    setComics((prevComics) => [...prevComics, ...res]);
    setLoading(false);
  }

  const loadMoreComics = () => {
    setPage(page + 1);
  };

  const renderComic = (comic, index) => {
    const foto = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    return (
      <View style={heroStyles.comicWrapper}>
        <Image
          source={{ uri: foto }}
          style={heroStyles.comicImg}
          resizeMode="contain"
        />
        <Text key={index}>{comic.title}</Text>
      </View>
    );
  };

  const closeClick = () => {
    setShowHero(false);
  };

  return (
    <View style={heroStyles.container}>
      <Pressable onPress={() => closeClick()}>
        <Image
          source={require("../../Images/close.png")}
          style={heroStyles.closeImg}
        />
      </Pressable>
      <View style={heroStyles.heroWrapper}>
        <Text style={heroStyles.title}>{hero.name}</Text>
        <Image source={{ uri: foto }} style={heroStyles.heroImg} />
        <Text>{hero.description}</Text>
      </View>

      {comics.length > 0 && <Text>Aparece en:</Text>}
      <FlatList
        data={comics}
        renderItem={({ item, index }) => renderComic(item, index)}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        onEndReached={loadMoreComics}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color="#f0131E" />
        }
      />
    </View>
  );
}
