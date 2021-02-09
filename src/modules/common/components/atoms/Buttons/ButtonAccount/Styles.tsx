import styled from 'styled-components';

export const StyledButtonAccount = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  border: 2px solid black;
  padding: 5px;
  outline: none;
  div {
    width: 30px;
    height: 30px;
    border: 2px solid black;

    border-radius: 50%;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
`;
