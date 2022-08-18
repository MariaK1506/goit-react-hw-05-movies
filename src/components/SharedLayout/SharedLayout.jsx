import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { WrapperContainer } from 'components/Container/Container.styled';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <WrapperContainer>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </WrapperContainer>
  );
};

export default SharedLayout;
