import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  color: black;

  &.active {
    color: orangered;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: orangered;
  }
`;
