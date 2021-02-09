import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInputSelect = styled.select`
  font-family: 'nunito-regular';
`;
const StyledOption = styled.option`
  font-family: 'nunito-regular';
`;

export interface InputSelectProps {
  name: string;
  options: [any];
  // ref: React.Ref<HTMLSelectElement | undefined>;
}
export const InputSelect = React.forwardRef<
  HTMLSelectElement,
  InputSelectProps
>(({ options, name }, ref) => {
  return (
    <StyledInputSelect ref={ref} name={name}>
      {options.map((item) => (
        <StyledOption key={item.id} value={JSON.stringify(item)}>
          {item.basename}
        </StyledOption>
      ))}
    </StyledInputSelect>
  );
});
