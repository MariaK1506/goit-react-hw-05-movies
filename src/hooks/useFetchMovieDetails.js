import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from 'services/movies-api';

export default function useFetchMovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

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
          setError(error);
          setStatus('rejected');
        });
    }
  }, [movieId]);

  return { status, error, movie };
}
