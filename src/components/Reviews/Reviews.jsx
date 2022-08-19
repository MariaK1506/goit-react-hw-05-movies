import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import useFetchMovieReviews from 'hooks/useFetchMovieReviews';
import { List, Item, AuthorText, ContentText } from './Reviews.styled';

export default function Reviews() {
  const { status, error, reviews } = useFetchMovieReviews();

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      {status === 'resolved' && (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <AuthorText>Author: {author}</AuthorText>
              <ContentText>{content}</ContentText>
            </Item>
          ))}
        </List>
      )}
    </>
  );
}
