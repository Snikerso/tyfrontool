import React from 'react';
import styled from 'styled-components';

const StyledNumberWords = styled.p`
  font-family: 'nunito-regular';
`;

export const NumberWords = ({ text }) => {
  return <StyledNumberWords>{text}</StyledNumberWords>;
};
