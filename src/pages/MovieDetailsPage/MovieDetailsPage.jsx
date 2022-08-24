import { useLocation } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import BackLink from 'components/BackLink/BackLink';
import useFetchMovieDetails from 'hooks/useFetchMovieDetails';

export default function MovieDetailsPage() {
  const { status, error, movie } = useFetchMovieDetails();

  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      {status === 'resolved' && (
        <section>
          <Container>
            <BackLink to={backLinkHref}>Back</BackLink>
            <MovieDetails movieDetails={movie} />
          </Container>
        </section>
      )}
    </>
  );
}
