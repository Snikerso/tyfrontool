import React from 'react';
import styled from 'styled-components';

const StyledInputRadio = styled.input`
  font-family: 'nunito-regular';
`;

export const InputRadio = ({
  options,
  onChange,
  name,
  checked,
  value,
  title,
}) => {
  return (
    <StyledInputRadio
      onChange={onChange}
      value={value}
      checked={checked}
      name={name}
      type={'radio'}
      title={title}
    />
  );
};
