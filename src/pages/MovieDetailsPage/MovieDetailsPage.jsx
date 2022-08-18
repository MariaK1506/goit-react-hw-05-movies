import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as Api from 'services/movies-api';
import { Container } from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import BackLink from 'components/BackLink/BackLink';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    setStatus('pending');
    renderMovieDetails();

    function renderMovieDetails() {
      Api.fetchMovieDetails(movieId)
        .then(data => {
          setMovie(data);
          setStatus('resolved');

          if (data.length === 0) {
            setMovie([]);
            setError('Sorry, there are no information about movie.');
            setStatus('rejected');
          }
        })
        .catch(error => {
          //   console.log(error);
          setError(error);
          setStatus('rejected');
        });
    }
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      {status === 'resolved' && (
        <section>
          <Container>
            <BackLink to={backLinkHref}>Back to movies</BackLink>

            {/* {error && <Navigate to="/" replace />} */}
            <MovieDetails movieDetails={movie} />
          </Container>
        </section>
      )}
    </>
  );
};

export default MovieDetailsPage;
