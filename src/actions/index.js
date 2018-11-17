import axios from "axios";

const API_KEY = "16c7ac5a745691fcb615134a5d34cefb";
const ROOT_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

export const FETCH_MOVIEINFO = "FETCH_MOVIEINFO";

export function fetchMovieInfo(moviename) {
  const url = `${ROOT_URL}&query=${moviename}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIEINFO,
    payload: request
  };
}
