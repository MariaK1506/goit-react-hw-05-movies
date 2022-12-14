import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  padding: 5px;
`;

export const LinkTo = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: black;

  &.active {
    color: orangered;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: orangered;
  }
`;
