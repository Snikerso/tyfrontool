import React from 'react';
import { StyledButtonEdit } from './Styles';
import { ReactComponent as EditSvg } from 'assets/interface/edit.svg';

export interface ButtonDeleteProps {
  isEdit: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonEdit: React.FC<ButtonDeleteProps> = ({
  onClick,
  isEdit,
}) => {
  return (
    <StyledButtonEdit onClick={onClick}>
      <EditSvg />
    </StyledButtonEdit>
  );
};

export default ButtonEdit;
