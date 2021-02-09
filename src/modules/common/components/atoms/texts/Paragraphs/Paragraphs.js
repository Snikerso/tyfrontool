import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-family: 'nunito-regular';
`;

export const Paragraph = ({ text }) => {
  return <StyledParagraph>{text}</StyledParagraph>;
};
