import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';

const MovieDetails = ({ movieDetails }) => {
  // const { poster_path, title, genres, overview, releaseDate, vote_average } =
  //   movieDetails;

  const genresList = movieDetails.genres.map(genre => genre.name).join(', ');
  return (
    <Container>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      </div>
      <div>
        <h2>{movieDetails.title ? movieDetails.title : 'Movie'}</h2>
        <p>User Score: {movieDetails.vote_average}%</p>
        <p>
          Overview: {movieDetails.overview ? movieDetails.overview : 'About...'}
        </p>
        <p>Genres: {genresList ? genresList : 'No informaton'}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>

          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default MovieDetails;
