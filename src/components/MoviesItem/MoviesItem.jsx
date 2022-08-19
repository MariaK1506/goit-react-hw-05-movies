import { Item, LinkTo } from './MoviesItem.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function MoviesItem({ id, title }) {
  const location = useLocation();
  return (
    <Item key={id}>
      <LinkTo to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </LinkTo>
    </Item>
  );
}

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
