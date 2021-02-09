import React from 'react';
import styled from 'styled-components';

const StyledWrapperListInputRadioColor = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 40px;
`;
const StyledWrapperInputRadioColor = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${({ color }) => color};
  }

  :hover input ~ .checkmark {
    background-color: red;
  }

  input:checked ~ .checkmark {
    border: 2px solid black;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
    background: yellow;
  }

  .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: yellow;
  }
`;
const InputRadioColor = styled.input``;

const colorInputs = [
  { id: 1, value: 'red', color: 'red', name: 'color' },
  { id: 2, value: 'orange', color: 'orange', name: 'color' },
  { id: 4, value: 'green', color: 'green', name: 'color' },
  { id: 5, value: 'blue', color: 'blue', name: 'color' },
  { id: 7, value: 'red', color: 'violet', name: 'color' },
  { id: 8, value: 'black', color: 'black', name: 'color' },
];

const ColorsInput = ({ register }) => {
  return (
    <StyledWrapperListInputRadioColor>
      {colorInputs.map((item) => {
        return (
          <StyledWrapperInputRadioColor key={item.id} color={item.color}>
            <InputRadioColor
              type="radio"
              value={item.value}
              name={item.name}
              ref={register}
            />
            <span className="checkmark">b</span>
          </StyledWrapperInputRadioColor>
        );
      })}
    </StyledWrapperListInputRadioColor>
  );
};

export default ColorsInput;
