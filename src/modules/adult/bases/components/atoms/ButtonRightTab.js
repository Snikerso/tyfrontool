import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AdoptSvg } from 'assets/interface/adopt.svg';

const StyledButtonRightTab = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35px;
  height: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: ${({ position }) => position}px;
  border: 2px solid black;
  border-left: none;
  outline: none;
  :hover {
    cursor: pointer;
    width: 40px;
  }
`;

const ButtonRightTab = ({ onClick, number, position }) => {
  return (
    <StyledButtonRightTab position={position} onClick={onClick}>
      <div>
        <AdoptSvg />
      </div>
      <p>{number}</p>
    </StyledButtonRightTab>
  );
};

export default ButtonRightTab;
