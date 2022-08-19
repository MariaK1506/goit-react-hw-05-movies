import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from 'services/movies-api';

export default function useFetchMovieCredits() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    renderMovieCasts();

    function renderMovieCasts() {
      Api.fetchMovieCredits(movieId)
        .then(data => {
          setCasts(data.cast);
          setStatus('resolved');

          if (data.cast.length === 0) {
            setError('No information');
            setStatus('rejected');
          }
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [movieId]);

  return { status, error, casts };
}
