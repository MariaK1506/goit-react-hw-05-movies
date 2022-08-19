import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Thumb = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
`;

export const Image = styled.img`
  width: 300px;
  object-fit: cover; ;
`;

export const TextWrapper = styled.div`
  padding: 0 10px;
  color: black;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Additional = styled.div`
  padding: 10px;
  background-color: #f7c79084;
`;

export const AdditionalList = styled.ul`
  display: flex;
`;

export const AdditionalItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const LinkTo = styled(Link)`
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
