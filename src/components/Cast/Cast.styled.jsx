import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  height: 300px;
  object-fit: cover;
`;

export const Name = styled.p`
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

export const Text = styled.p`
  padding: 5px 10px;
  font-size: 16px;
  color: black;
`;
