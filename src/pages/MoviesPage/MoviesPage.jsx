import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import useFetchMoviesBySearch from 'hooks/useFetchMoviesBySearch';

export default function MoviesPage() {
  const { status, error, movies, handleFormSubmit } = useFetchMoviesBySearch();

  return (
    <section>
      <SearchForm onSubmit={handleFormSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}

      {status === 'resolved' && <MoviesList movies={movies} />}
    </section>
  );
}
