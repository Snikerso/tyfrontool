import React from 'react';
import { StyledButtonDelete } from './Styles';
import { ReactComponent as DeleteSvg } from 'assets/interface/delete-trash-can.svg';

export interface ButtonDeleteProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({ onClick }) => {
  return (
    <StyledButtonDelete onClick={onClick}>
      <DeleteSvg />
    </StyledButtonDelete>
  );
};

export default ButtonDelete;
