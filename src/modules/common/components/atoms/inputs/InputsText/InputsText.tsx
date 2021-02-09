import React, { InputHTMLAttributes } from 'react';

import { StyledInputText } from './Styles';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  ref: React.Ref<HTMLInputElement | null>;
}

export const InputText: React.FC<InputTextProps> = React.forwardRef(
  ({ name, placeholder }, ref) => {
    return (
      <StyledInputText
        aria-label={name}
        placeholder={placeholder}
        name={name}
        ref={ref}
        data-testid="input-text"
        type="text"
      />
    );
  }
);
