import { useState, useEffect } from 'react';
import * as Api from 'services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';

export default function HomePage() {
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

  return (
    <section>
      <h2>Trending today</h2>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      {status === 'resolved' && <MoviesList movies={movies} />}
    </section>
  );
}
