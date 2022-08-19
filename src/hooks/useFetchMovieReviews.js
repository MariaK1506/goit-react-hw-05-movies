import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from 'services/movies-api';

export default function useFetchMovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    renderMovieReviews();

    function renderMovieReviews() {
      Api.fetchMovieReviews(movieId)
        .then(data => {
          setReviews(data.results);
          setStatus('resolved');

          if (data.results.length === 0) {
            setError('We do not have any reviews for this movie');
            setStatus('rejected');
          }
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [movieId]);

  return { status, error, reviews };
}
