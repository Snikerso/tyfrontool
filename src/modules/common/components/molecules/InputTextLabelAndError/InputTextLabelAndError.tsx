import React from 'react';
import Label from 'modules/common/components/atoms/texts/Labels/Labels';

import { StyledWrapper } from './Styles';

import { InputText } from 'modules/common/components/atoms/inputs/InputsText/InputsText';
import { ErrorInput } from 'modules/common/components/atoms/texts/Errors/ErrorInput/ErrorInput';

interface InputTextLabelAndErrorProps {
  text: string;
  name: string;
  placeholder: string;
  errors: any;
  ref: React.Ref<HTMLInputElement>;
}

const InputTextLabelAndError: React.FC<InputTextLabelAndErrorProps> = React.forwardRef(
  ({ name, text, errors, placeholder }, ref) => {
    return (
      <StyledWrapper>
        <Label text={text} />
        <InputText placeholder={placeholder} name={name} ref={ref} />
        {errors[name] && <ErrorInput text={errors[name].message} />}
      </StyledWrapper>
    );
  }
);

export default InputTextLabelAndError;
