import axios from 'axios';
// import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const BASE_URL = 'https://api.themoviedb.org/3/';

const API_KEY = '2469436d9ac3e13267858f145f807eef';
const TRENDING_PATH_PARAMS = 'trending/all/day';
const SEARCH_PATH_PARAMS = 'search/movie';
// const DETAILS_PATH_PARAMS = 'movie/';
// const CREDITS_PATH_PARAMS = '';
// const REVIEWS_PATH_PARAMS = '';

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `${TRENDING_PATH_PARAMS}?api_key=${API_KEY}&page=1`
  );
  console.log(response.data);
  return response.data;
}

// export const fetchSearchMovies = (query, page) =>
//   axios.get(
//     `${BASE_URL}${SEARCH_PATH_PARAMS}?api_key=${API_KEY}&language=en-US&${query}&page=${page}&include_adult=false`
//   );
