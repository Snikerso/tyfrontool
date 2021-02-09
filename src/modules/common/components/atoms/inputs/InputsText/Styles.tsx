import styled from 'styled-components';

export const StyledInputText = styled.input`
  padding: 8px;
  max-width: 250px;
  font-size: 15px;
  border-radius: 5px;
  border: 2px solid black;
  outline: none;
  :active {
    border: 2px solid red;
  }
  :focus {
    border: 2px solid ${({ theme }) => theme.first};
  }
`;
