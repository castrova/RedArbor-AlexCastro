import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  Pressable,
} from "react-native";
import { fetchCharacters } from "../utiles";
import { useEffect, useState } from "react";
import { listSytles } from "./marvelListStyles";
import HeroeThumbnail from "./thumbnail";
import Hero from "../Heroe/hero";
import UserPage from "./userPage";

export default function MarvelList({ user, setLogged }) {
  const [characters, setCharacters] = useState([]); //Todos los héroes
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0); // Página actual
  const [showHero, setShowHero] = useState(false);
  const [hero, setHero] = useState({});
  const [modal, setModal] = useState(false);

  //Se encarga de lanzar la función para pedir héroes al empezar y al llegar al final del scroll
  useEffect(() => {
    getCharacters();
  }, [page]);

  //Se encarga de aumentar una página cuando se llega al fin del scroll
  const loadMoreData = () => {
    setPage(page + 1);
  };

  //Se encarga de pedir los héroes y guardarlos en un estado
  async function getCharacters() {
    setLoading(true);

    const res = await fetchCharacters(page);
    setCharacters((prevAllMarvel) => [...prevAllMarvel, ...res]);
    setLoading(false);
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

  const userPress = () => {
    setModal(!modal);
  };

  return (
    <>
      {showHero ? (
        <Hero hero={hero} setShowHero={setShowHero} />
      ) : (
        <>
          <View style={listSytles.userButton}>
            <Pressable onPress={() => userPress()}>
              <Image
                source={require("../../../Images/user.png")}
                style={listSytles.userImg}
              />
            </Pressable>
          </View>
          {modal && (
            <UserPage user={user} setLogged={setLogged} setModal={setModal} />
          )}
          <FlatList
            data={characters}
            renderItem={({ item }) => renderHeroes(item)}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            onEndReached={loadMoreData}
            ListFooterComponent={
              loading && (
                <View style={listSytles.loadingWrapper}>
                  <ActivityIndicator size="large" color="#f0131E" />
                </View>
              )
            }
            onEndReachedThreshold={0.5}
          />
        </>
      )}
    </>
  );
}
