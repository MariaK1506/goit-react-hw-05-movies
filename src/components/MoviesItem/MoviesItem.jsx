import { Link } from 'react-router-dom';

const MoviesItem = ({ id, title, poster }) => {
  return (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};

export default MoviesItem;
