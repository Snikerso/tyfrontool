import React, { ButtonHTMLAttributes } from 'react';
import { StyledButtonAccount } from './Styles';

export interface ButtonAccountProps {
  text: string;

  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonAccount: React.FC<ButtonAccountProps> = ({
  text,
  onClick,
}) => {
  return (
    <StyledButtonAccount onClick={onClick}>
      <div></div>
      {text}
    </StyledButtonAccount>
  );
};

export default ButtonAccount;
