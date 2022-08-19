import useFetchTrandingMovies from 'hooks/useFetchTrandingMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';

export default function HomePage() {
  const { movies, error, status } = useFetchTrandingMovies();

  return (
    <section>
      <h2>Trending today</h2>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      {status === 'resolved' && <MoviesList movies={movies} />}
    </section>
  );
}
