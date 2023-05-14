import axios from 'axios';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const USER_KEY = '9e4f0ad78cbe1148a9d4c0c8389afc83';
const PARAMETERS_TRENDING = '/trending/all/day';

export async function fetchTrendings() {
  const { data } = await axios.get(
    `${BASE_URL}${PARAMETERS_TRENDING}?api_key=${USER_KEY}`
  );
  return data;
}

export async function fetchMovieId(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${USER_KEY}`
  );
  return data;
}

export async function fetchMovieSearch(query) {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${USER_KEY}&language=en-US&query=${query}&page=1`
  );
  return data;
}
export async function fetchMovieCast(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${USER_KEY}`
  );
  return data;
}

export async function fetchMovieReviews(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${USER_KEY}`
  );
  return data;
}
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
