import { StyledLink } from 'components/Navigation/Navigation.styled';

const NotFoundPage = () => {
  return (
    <div>
      <p>Sorry, we couldn't find this page :(</p>
      <p>Please, go to {<StyledLink to="/">Home</StyledLink>}</p>
    </div>
  );
};

export default NotFoundPage;
