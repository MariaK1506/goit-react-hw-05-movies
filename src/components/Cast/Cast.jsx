import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import useFetchMovieCredits from 'hooks/useFetchMovieCredits';
import { List, Item, Image, Name, Text } from './Cast.styled';

export default function Cast() {
  const { status, error, casts } = useFetchMovieCredits();

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Error message={error} />}
      {status === 'resolved' && (
        <List>
          {casts.map(({ id, profile_path, name, character }) => (
            <Item key={id}>
              {profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt="name"
                />
              ) : (
                <Image
                  src={
                    'https://image.tmdb.org/t/p/w200/xx6aE6A1RnsDjtDd32CyGecr5tx.jpg'
                  }
                  alt="name"
                />
              )}

              <Name>{name}</Name>
              <Text>Character: {character}</Text>
            </Item>
          ))}
        </List>
      )}
    </>
  );
}
