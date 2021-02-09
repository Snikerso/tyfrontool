import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as ButtonInitAddBase } from 'assets/interface/add.svg';
import FormNewWord from 'modules/common/components/organisms/forms/FormNewWord/FormNewWord';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 7px;
  padding: 5px;
  color: blue;

  ${({ isAdding }) =>
    isAdding === false &&
    css`
      :hover {
        cursor: pointer;
        border: 2px solid blue;
      }
    `}
`;
const ButtonClose = styled.button`
  align-self: flex-end;
`;

const WordNewItem = ({ type }) => {
  const [isAdding, setIsAdding] = useState(false);
  console.log(setIsAdding);
  return (
    <>
      <StyledWrapper
        onClick={isAdding ? null : () => setIsAdding((prev) => !prev)}
        isAdding={isAdding}
      >
        {isAdding ? (
          <>
            <ButtonClose onClick={() => setIsAdding((prev) => !prev)}>
              X
            </ButtonClose>
            <FormNewWord
              isAdding={isAdding}
              setIsAdding={setIsAdding}
              type={type}
            />
          </>
        ) : (
          <>
            <ButtonInitAddBase />
            <p>Dodaj słowo</p>
          </>
        )}
      </StyledWrapper>
    </>
  );
};

export default WordNewItem;
