import { Routes, Route } from 'react-router-dom';
import { Api } from '../services/movies-api';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Header from './Header/Header';
import { WrapperContainer } from './Container/Container.styled';

export const App = () => {
  return (
    <div>
      <WrapperContainer>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/movies" element={<MoviesPage />}></Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </WrapperContainer>
    </div>
  );
};
