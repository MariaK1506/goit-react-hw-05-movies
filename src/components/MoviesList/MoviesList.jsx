import PropTypes from 'prop-types';
import MoviesItem from '../MoviesItem/MoviesItem';

const MoviesList = ({ movies }) => {
  // console.log(movies);
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <MoviesItem key={id} id={id} title={title} poster={poster_path} />
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
