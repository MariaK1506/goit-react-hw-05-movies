import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as Api from 'services/movies-api';

export default function useFetchMoviesBySearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setStatus('pending');
    renderMoviesBySearch();

    function renderMoviesBySearch() {
      Api.fetchMoviesBySearch(searchQuery)
        .then(data => {
          setMovies(data.results);
          setStatus('resolved');

          if (data.results.length === 0) {
            setMovies([]);
            setError(
              'Sorry, there are no movies matching your search query. Please try again.'
            );
            setStatus('rejected');
          }
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [searchQuery]);

  const handleFormSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return { status, error, movies, handleFormSubmit };
}
