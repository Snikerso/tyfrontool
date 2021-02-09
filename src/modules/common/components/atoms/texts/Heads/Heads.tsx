import React from 'react';
import styled from 'styled-components';

type HeadProps = {
  text: string;
};

const StyledHeadGameRelay = styled.h3`
  font-family: 'nunito-regular';
`;

export const HeadGameRelay = ({ text }: HeadProps) => {
  return <StyledHeadGameRelay>{text}</StyledHeadGameRelay>;
};

const StyledHeadPage = styled.h2`
  font-size: 42px;
  font-family: 'nunito-semibold';
`;

export const HeadPage = ({ text }: HeadProps) => {
  return <StyledHeadPage>{text}</StyledHeadPage>;
};

export const StyledHeaderBaseCard = styled.h3`
  font-family: nunito-regular;
  color: ${({ theme }) => theme.third};
  font-size: 26px;
  text-align: center;
`;
