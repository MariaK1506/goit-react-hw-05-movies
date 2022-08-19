import PropTypes from 'prop-types';
import MoviesItem from '../MoviesItem/MoviesItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <MoviesItem key={id} id={id} title={title} poster={poster_path} />
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
