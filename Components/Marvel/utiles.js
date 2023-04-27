import md5 from "md5";

const publicKey = "d67dbc9984f8735bacdf2a2028c76139";
const privateKey = "6495bec3f3986b34ec8ca994a639753d8d126451";
const marvelAPI = "https://gateway.marvel.com:443/v1/public";

export async function fetchCharacters(page) {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  const offSet = page * 20;

  try {
    const response = await fetch(
      `${marvelAPI}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offSet}`
    );
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchComics(page, id) {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  const offSet = page * 20;

  try {
    const response = await fetch(
      `${marvelAPI}/characters/${id}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offSet}`
    );
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
}