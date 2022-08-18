import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from 'services/movies-api';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
// import Reviews from 'components/Reviews/Reviews';

const Reviews = () => {
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

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      {status === 'resolved' && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

// export default ReviewsPage;

// const Reviews = ({ reviews }) => {
//   return (
//     <ul>
//       {reviews.map(({ id, author, content }) => (
//         <li key={id}>
//           <p>Author: {author}</p>
//           <p>{content}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };
export default Reviews;
