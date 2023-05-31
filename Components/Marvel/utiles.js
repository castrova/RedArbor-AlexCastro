import md5 from "md5";
import { create } from "apisauce";
import { PUBLIC_KEY, PRIVATE_KEY } from "../../config";

const marvelAPI = "https://gateway.marvel.com:443/v1/public";

const api = create({
  baseURL: marvelAPI,
});

//Función que hace un fetch de la lista de héroes
export async function fetchCharacters(page) {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
  const offSet = page * 20;

  try {
    const response = await api.get(`/characters`, {
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash,
      offset: offSet,
    });
    return response.data.data.results;
  } catch (error) {
    console.error(error);
  }
}

//Función que hace un fetch de la lista de cómics
export async function fetchComics(page, id) {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
  const offSet = page * 20;

  try {
    const response = await api.get(`/characters/${id}/comics`, {
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash,
      offset: offSet,
    });
    return response.data.data.results;
  } catch (error) {
    console.error(error);
  }
}
