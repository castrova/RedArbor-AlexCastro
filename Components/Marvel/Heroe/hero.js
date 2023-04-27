import { Text, View, Image, FlatList, Pressable } from "react-native";
import { heroStyles } from "./heroStyles";
import { useEffect, useState } from "react";
import { fetchComics } from "../utiles";

export default function Hero({ hero, setShowHero }) {
  const [comics, setComics] = useState([]);
  const [page, setPage] = useState(1);

  const foto = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

  useEffect(() => {
    getComics();
  }, [page]);

  async function getComics() {
    const res = await fetchComics(page, hero.id);
    console.log(res);
    setComics((prevComics) => [...prevComics, ...res]);
  }

  const loadMoreComics = () => {
    setPage(page + 1);
  };

  const renderComic = (comic, index) => {
    return <Text key={index}>{comic.title}</Text>;
  };

  const closeClick = () => {
    setShowHero(false);
  };

  return (
    <View style={heroStyles.container}>
      <Pressable onPress={() => closeClick()}>
        <Text>CLOSE</Text>
      </Pressable>
      <Text>{hero.name}</Text>
      <Text>{hero.description}</Text>
      <Image source={{ uri: foto }} style={{ width: 400, height: 400 }} />
      <FlatList
        data={comics}
        renderItem={({ item, index }) => renderComic(item, index)}
        keyExtractor={(item) => item.id}
        onEndReached={loadMoreComics}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
