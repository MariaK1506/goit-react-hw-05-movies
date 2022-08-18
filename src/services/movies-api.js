import axios from 'axios';
// import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = '2469436d9ac3e13267858f145f807eef';
const TRENDING_PATH_PARAMS = 'trending/movie/day';
const SEARCH_PATH_PARAMS = 'search/movie';
const DETAILS_PATH_PARAMS = 'movie/';

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `/3/${TRENDING_PATH_PARAMS}?api_key=${API_KEY}`
  );
  // console.log(response.data);
  return response.data;
}

export async function fetchMoviesBySearch(searchQuery) {
  const response = await axios.get(
    `/3/${SEARCH_PATH_PARAMS}?api_key=${API_KEY}&query=${searchQuery}&include_adult=false`
  );
  // console.log(response.data);
  return response.data;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(
    `/3/${DETAILS_PATH_PARAMS}${movieId}?api_key=${API_KEY}&language=en-US`
  );
  // console.log(response.data);
  return response.data;
}

export async function fetchMovieCredits(movieId) {
  const response = await axios.get(
    `/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  // console.log(response.data);
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(
    `/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  console.log(response.data);
  return response.data;
}
