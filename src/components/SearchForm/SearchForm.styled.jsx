import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  display: inline-block;
  /* width: 100%; */
  font: inherit;
  font-size: 18px;

  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  margin-left: 5px;
  border: 1px solid black;

  font-size: 18px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
    color: orangered;
  }
`;

export const Icon = styled(BiSearch)`
  height: 20px;
  width: 20px;
`;
