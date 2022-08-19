import { StyledLink } from 'pages/NotFoundPage/NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <div>
      <h1>Sorry, we couldn't find this page :(</h1>
      <p>Please go to {<StyledLink to="/">Home</StyledLink>}</p>
    </div>
  );
}
