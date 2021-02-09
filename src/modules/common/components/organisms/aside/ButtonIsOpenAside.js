import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowAside } from 'assets/interface/arrow_aside.svg';

const StyledWrapper = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -16px;
  background-color: black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  :hover {
    cursor: pointer;
    background-color: red;
  }
`;

const ButtonIsOpenAside = ({ isOpen, onClick }) => {
  return (
    <StyledWrapper onClick={onClick}>
      <ArrowAside />
    </StyledWrapper>
  );
};

export default ButtonIsOpenAside;
