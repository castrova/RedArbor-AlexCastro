import {
  View,
  Image,
  ActivityIndicator,
  FlatList,
  Pressable,
} from "react-native";
import { fetchCharacters } from "../utiles";
import { useEffect, useReducer } from "react";
import { listSytles } from "./marvelListStyles";
import HeroeThumbnail from "./thumbnail";
import Hero from "../Heroe/hero";
import UserPage from "./userPage";

const initialState = {
  characters: [],
  loading: false,
  page: 0,
  showHero: false,
  hero: {},
  modal: false,
  clickIndex: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_SHOW_HERO":
      return {
        ...state,
        showHero: action.payload,
      };
    case "SET_HERO":
      return {
        ...state,
        hero: action.payload,
      };
    case "SET_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    case "SET_CLICK_INDEX":
      return {
        ...state,
        clickIndex: action.payload,
      };
    default:
      return state;
  }
}

export default function MarvelList({ user, setLogged }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Función encargada de pedir los personajes a la API
  useEffect(() => {
    getCharacters();
  }, [state.page]);

  //Función que se lanza al llegar al fin del scroll de héroes
  const loadMoreData = () => {
    dispatch({ type: "SET_PAGE", payload: state.page + 1 });
  };

  //Función que lanza la llamada al servidor
  async function getCharacters() {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await fetchCharacters(state.page);
    dispatch({ type: "SET_CHARACTERS", payload: res });
    dispatch({ type: "SET_LOADING", payload: false });
  }

  //Función que renderiza cada héroe
  const renderHeroes = (hero, idx) => {
    return (
      <HeroeThumbnail
        idx={idx}
        setClickIndex={(clickIndex) =>
          dispatch({ type: "SET_CLICK_INDEX", payload: clickIndex })
        }
        key={hero.id}
        heroe={hero}
        setHero={(hero) => dispatch({ type: "SET_HERO", payload: hero })}
        setShowHero={(showHero) =>
          dispatch({ type: "SET_SHOW_HERO", payload: showHero })
        }
      />
    );
  };

  //Función que se llama al presionar el icono de usuario
  const userPress = () => {
    dispatch({ type: "SET_MODAL", payload: !state.modal });
  };

  return (
    <>
      {state.showHero ? (
        <Hero
          hero={state.hero}
          setShowHero={(showHero) =>
            dispatch({ type: "SET_SHOW_HERO", payload: showHero })
          }
        />
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
          {state.modal && (
            <UserPage
              user={user}
              setLogged={setLogged}
              setModal={(modal) =>
                dispatch({ type: "SET_MODAL", payload: modal })
              }
            />
          )}
          <FlatList
            data={state.characters}
            renderItem={({ item, index }) => renderHeroes(item, index)}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            onEndReached={loadMoreData}
            initialScrollIndex={state.clickIndex}
            ListFooterComponent={
              state.loading && (
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
