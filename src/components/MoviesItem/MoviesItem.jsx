import { Item, LinkTo } from './MoviesItem.styled';
import PropTypes from 'prop-types';

export default function MoviesItem({ id, title }) {
  return (
    <Item key={id}>
      <LinkTo to={`/movies/${id}`}>{title}</LinkTo>
    </Item>
  );
}

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  tittle: PropTypes.string.isRequired,
};
