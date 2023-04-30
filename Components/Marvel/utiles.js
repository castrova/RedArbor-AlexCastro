import md5 from "md5";
import { create } from "apisauce";

const publicKey = "d67dbc9984f8735bacdf2a2028c76139";
const privateKey = "6495bec3f3986b34ec8ca994a639753d8d126451";
const marvelAPI = "https://gateway.marvel.com:443/v1/public";

const api = create({
  baseURL: marvelAPI,
});

//Función que hace un fetch de la lista de héroes
export async function fetchCharacters(page) {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  const offSet = page * 20;

  try {
    const response = await api.get(`/characters`, {
      ts: timestamp,
      apikey: publicKey,
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
  console.log(id);
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  const offSet = page * 20;

  try {
    const response = await api.get(`/characters/${id}/comics`, {
      ts: timestamp,
      apikey: publicKey,
      hash,
      offset: offSet,
    });
    return response.data.data.results;
  } catch (error) {
    console.error(error);
  }
}
