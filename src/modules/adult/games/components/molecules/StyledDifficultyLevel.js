import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 60px;
  height: 60px;
  top: -30px;
  left: -30px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: grey;
  color: blue;
  transform-origin: center;
  transform: rotate(180deg);
  p {
    color: #78ffef;
    font-weight: bold;
    font-size: 25px;
    transform-origin: center;
    transform: rotate(180deg);
  }
  svg {
    position: absolute;
    width: 150px;
    height: 150px;
    left: -5px;
    top: -15px;
    z-index: 10;
  }
  svg circle {
    width: 150px;
    height: 150px;
    fill: none;
    stroke-width: 8;
    stroke: ${({ theme }) => theme.first};
    transform: translate(5px, 5px);
  }
  svg circle:nth-child(2) {
    stroke-dasharray: 440;
    stroke-dashoffset: calc(
      440 - (${({ difficultyLevel }) => difficultyLevel} / 0.05)
    );
    /* transform: rotate(45deg); */
    transition: 1s;
    stroke: ${({ theme }) => theme.second};
    z-index: 2;
  }
`;

const StyledDifficultyLevel = ({ difficultyLevel }) => {
  return (
    <StyledWrapper difficultyLevel={difficultyLevel.value}>
      <svg>
        <circle cx="30" cy="40" r="30"></circle>
        <circle cx="30" cy="40" r="30"></circle>
      </svg>
      <p>{difficultyLevel.level}</p>
    </StyledWrapper>
  );
};

export default StyledDifficultyLevel;
