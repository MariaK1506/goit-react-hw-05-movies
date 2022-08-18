import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import HomePage from 'pages/HomePage/HomePage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
// import CastPage from 'pages/CastPage/CastPage';
// import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';
import SharedLayout from './SharedLayout/SharedLayout';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
