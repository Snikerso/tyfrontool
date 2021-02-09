import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { FastWordsContext } from 'contexts/FastWordsContext';
import ButtonIsOpenAside from './ButtonIsOpenAside';

import FastWordsList from './FastWordsList';
import WordNewItem from './WordNewItem';

const StyledWrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  width: 40px;
  height: 100vh;
  border-right: 2px solid black;
  background-color: ${({ theme }) => theme.white};
  z-index: 9;
  h1 {
    font-family: virgo;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      width: 270px;
    `}
`;

const StyledWrapperFastWords = styled.div`
  padding-top: 40px;
  display: flex;
`;
const StyledWrapperFastWordsInner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
const StyledPanelBottom = styled.div`
  position: absolute;
  bottom: 0;
`;

const AsideLeft = ({ authState }) => {
  const { fastWordsState } = useContext(FastWordsContext);

  const [isOpen, setIsOpen] = useState(true);
  if (authState.isKids === true) {
    return null;
  } else {
    return (
      <StyledWrapper isOpen={isOpen}>
        <ButtonIsOpenAside onClick={() => setIsOpen((prev) => !prev)} />
        <StyledWrapperFastWords>
          <StyledWrapperFastWordsInner>
            {isOpen && (
              <>
                <FastWordsList items={fastWordsState} />
              </>
            )}
          </StyledWrapperFastWordsInner>
        </StyledWrapperFastWords>
        <WordNewItem type={'FASTWORD'} />

        <StyledPanelBottom>
          {isOpen && (
            <>
              <div>Samouczek</div>
              <div>Regulamin</div>
              <div>pliki cookies</div>
            </>
          )}
        </StyledPanelBottom>
      </StyledWrapper>
    );
  }
};
export default AsideLeft;
