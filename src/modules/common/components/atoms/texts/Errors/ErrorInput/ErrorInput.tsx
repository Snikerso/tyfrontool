import React from 'react';
import { StyledErrorInput } from './Styles';

type ErrorInputProps = { text: string };

export const ErrorInput: React.FC<ErrorInputProps> = ({ text }) => {
  return <StyledErrorInput>{text}</StyledErrorInput>;
};
