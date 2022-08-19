import { useState, useEffect } from 'react';
import * as Api from 'services/movies-api';

export default function useFetchTrandingMovies() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');
    renderTrandingMovies();

    function renderTrandingMovies() {
      Api.fetchTrendingMovies()
        .then(data => {
          setMovies(data.results);
          setStatus('resolved');

          if (data.results.lenght === 0) {
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
  }, []);

  return { movies, error, status };
}
