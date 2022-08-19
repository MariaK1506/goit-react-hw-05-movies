import styled from 'styled-components';

export const List = styled.ul`
  padding: 10px;
`;

export const Item = styled.li`
  padding: 25px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
`;

export const AuthorText = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContentText = styled.p`
  font-size: 18px;
`;
