import React from 'react';
import styled from 'styled-components';

type LabelProps = {
  text: string;
};

const StyledLabel = styled.label`
  font-family: 'nunito-regular';
  font-size: 14px;
`;

const Label: React.FC<LabelProps> = ({ text }) => {
  return <StyledLabel>{text}</StyledLabel>;
};

export default Label;
