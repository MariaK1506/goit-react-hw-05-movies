// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import * as Api from 'services/movies-api';
// import Loader from 'components/Loader/Loader';
// import Error from 'components/Error/Error';
// import Cast from 'components/Cast/Cast';

// const CastPage = () => {
//   const { movieId } = useParams();
//   const [casts, setCasts] = useState([]);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('idle');

//   useEffect(() => {
//     setStatus('pending');
//     renderMovieCasts();

//     function renderMovieCasts() {
//       Api.fetchMovieCredits(movieId)
//         .then(data => {
//           setCasts(data.cast);
//           setStatus('resolved');

//           if (data.cast.length === 0) {
//             setError('No information');
//             setStatus('rejected');
//           }
//         })
//         .catch(error => {
//           setError(error);
//           setStatus('rejected');
//         });
//     }
//   }, [movieId]);

//   return (
//     <>
//       {status === 'pending' && <Loader />}
//       {status === 'rejected' && <Error message={error} />}
//       {status === 'resolved' && <Cast casts={casts} />}
//     </>
//   );
// };

// export default CastPage;
