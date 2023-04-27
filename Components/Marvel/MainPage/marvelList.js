import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { fetchCharacters } from "../utiles";
import { useEffect, useState } from "react";
import { listSytles } from "./marvelListStyles";
import HeroeThumbnail from "./thumbnail";
import Hero from "../Heroe/hero";

export default function MarvelList() {
  const [characters, setCharacters] = useState([]); //Todos los héroes
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0); // Página actual
  const [showHero, setShowHero] = useState(false);
  const [hero, setHero] = useState({});

  //Se encarga de lanzar la función para pedir héroes al empezar y al llegar al final del scroll
  useEffect(() => {
    setLoading(true);

    getCharacters();
    setLoading(false);
  }, [page]);

  //Se encarga de aumentar una página cuando se llega al fin del scroll
  const loadMoreData = () => {
    setPage(page + 1);
  };

  //Se encarga de pedir los héroes y guardarlos en un estado
  async function getCharacters() {
    const res = await fetchCharacters(page);
    setCharacters((prevAllMarvel) => [...prevAllMarvel, ...res]);
  }

  //Se encarga de renderizar cada thumbnail de héroe
  const renderHeroes = (hero) => {
    return (
      <HeroeThumbnail
        key={hero.id}
        heroe={hero}
        setHero={setHero}
        setShowHero={setShowHero}
      />
    );
  };

  return (
    <>
      {loading ? (
        <View style={listSytles.loadingWrapper}>
          <ActivityIndicator size="large" color="#f0131E" />
        </View>
      ) : (
        <>
          {showHero ? (
            <Hero hero={hero} setShowHero={setShowHero} />
          ) : (
            <FlatList
              data={characters}
              renderItem={({ item }) => renderHeroes(item)}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              onEndReached={loadMoreData}
              onEndReachedThreshold={0.5}
            />
          )}
        </>
      )}
    </>
  );
}
