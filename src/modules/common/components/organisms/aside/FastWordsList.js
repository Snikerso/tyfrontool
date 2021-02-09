import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import * as Accordion from 'modules/common/components/organisms/aside/Accordion';
import { FastWordsContext } from 'contexts/FastWordsContext';

const StyledWrapperFastWordList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35vh;
  overflow-y: scroll;
`;

const StyledWrapperFastWordItemEmpty = styled.div`
  min-width: 200px;
  border-radius: 7px;
  /* background-color: lightblue; */
  border: 1px solid black;
  padding: 5px;
  color: red;
`;

const FastWordItemEmpty = () => {
  return (
    <StyledWrapperFastWordItemEmpty>
      {'Jeszcze nie dodałes słowa'}
      <button>dowiedz się wiecej</button>
    </StyledWrapperFastWordItemEmpty>
  );
};

const LengthInformation = styled.div`
  width: 40px;
  border: 1px solid red;

  ${({ disabled }) =>
    disabled &&
    css`
      border: 2px solid green;
    `}
`;

const FastWordsList = ({ items }) => {
  const { fastWordsDispatch } = useContext(FastWordsContext);
  const handleDeleteFastWord = (item) => {
    fastWordsDispatch({ type: 'DELETE', payload: { item: item } });
  };
  return (
    <>
      <h3>{`Twój niezbędnik`}</h3>
      <LengthInformation disabled={items.length >= 10}>
        {items.length}/{items.length >= 10 ? '20' : '10'}
      </LengthInformation>
      <StyledWrapperFastWordList>
        {items.length === 0 ? <FastWordItemEmpty /> : null}
        <Accordion.Wizzard>
          {items.map((item) => {
            return (
              <Accordion.Item
                key={item.id}
                item={item}
                type="FASTWORD"
                handleDelete={() => handleDeleteFastWord(item)}
              />
            );
          })}
        </Accordion.Wizzard>
      </StyledWrapperFastWordList>
    </>
  );
};

export default FastWordsList;
