import React from 'react';
import { StyledButtonClose } from './Styles';
import { ReactComponent as DeleteSvg } from 'assets/interface/delete-trash-can.svg';

export interface ButtonCloseProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonClose: React.FC<ButtonCloseProps> = ({ onClick }) => {
  return <StyledButtonClose onClick={onClick}>X</StyledButtonClose>;
};

export default ButtonClose;
