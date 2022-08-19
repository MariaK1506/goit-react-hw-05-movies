import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import {
  Thumb,
  Image,
  TextWrapper,
  Title,
  Text,
  Additional,
  AdditionalList,
  AdditionalItem,
  LinkTo,
} from './MovieDetails.styled';

export default function MovieDetails({ movieDetails }) {
  const location = useLocation();
  const genresList = movieDetails.genres.map(genre => genre.name).join(', ');
  return (
    <Container>
      <Thumb>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <TextWrapper>
          <Title>{movieDetails.title ? movieDetails.title : 'Movie'}</Title>
          <Text>User Score: {movieDetails.vote_average}%</Text>
          <Text>
            Overview:{' '}
            {movieDetails.overview ? movieDetails.overview : 'About...'}
          </Text>
          <Text>Genres: {genresList ? genresList : 'No informaton'}</Text>
        </TextWrapper>
      </Thumb>
      <Additional>
        <h3>Additional information</h3>
        <AdditionalList>
          <AdditionalItem>
            <LinkTo to="cast" state={{ from: location?.state?.from }}>
              Cast
            </LinkTo>
          </AdditionalItem>

          <AdditionalItem>
            <LinkTo to="reviews" state={{ from: location?.state?.from }}>
              Reviews
            </LinkTo>
          </AdditionalItem>
        </AdditionalList>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Additional>
    </Container>
  );
}

MovieDetails.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};
