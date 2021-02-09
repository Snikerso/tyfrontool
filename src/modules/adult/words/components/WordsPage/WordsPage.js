import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ActualBaseContext } from 'contexts/ActualBaseContext';
import { FastWordsContext } from 'contexts/FastWordsContext';
import { HeadPage } from 'modules/common/components/atoms/texts/Heads/Heads';
import { Paragraph } from 'modules/common/components/atoms/texts/Paragraphs/Paragraphs';
import * as Accordion from 'modules/common/components/organisms/aside/Accordion';
import WordNewItem from 'modules/common/components/organisms/aside/WordNewItem';

const StyledWrapperBaseMyWords = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const StyledWrapperMetaData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const WordsPage = () => {
  let location = useLocation();
  location = location.pathname.split('/');
  const [isLoading, setIsLoading] = useState(true);
  const { actualBaseState, actualBaseDispatch } = useContext(ActualBaseContext);
  const { fastWordsDispatch } = useContext(FastWordsContext);

  const handleDeleteWord = (base, word) => {
    let newItems = base.words.filter((worditem) => worditem.id != word.id);

    fetch(`http://127.0.0.1:8000/wordlist/base/${base.id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        id: base.id,
        base: base.baseName,
        description: base.title,
        words: newItems,
      }),
    }).then((res) => {
      actualBaseDispatch({
        type: 'DELETE_WORD',
        payload: { word: word },
      });
    });
  };

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/wordlist/${
        location[1] === 'community' ? 'community' : 'base'
      }/${location[2]}/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        actualBaseDispatch({ type: 'INIT', payload: { data: data } });
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return 'Loading...';

  return (
    <>
      <StyledWrapperMetaData>
        <HeadPage text={actualBaseState.basename} />
        <Paragraph text={actualBaseState.description} />
        <Paragraph text={'Utworzony: 20.04.2019'} />
        <Paragraph text={'Zaktualizowany: 20.05.2020'} />
        <div>
          from {actualBaseState.languageFrom} to {actualBaseState.languageTo}
        </div>
      </StyledWrapperMetaData>

      <StyledWrapperBaseMyWords>
        {location[1] == 'community' ? null : (
          <WordNewItem type={'MYWORD'} base={actualBaseState} />
        )}
        <Accordion.Wizzard>
          {actualBaseState.words.map((word) => {
            return (
              <Accordion.Item
                key={word.id}
                type={'MYWORD'}
                item={word}
                base={actualBaseState}
                handleDelete={() => handleDeleteWord(actualBaseState, word)}
                handleAddFastWord={() =>
                  fastWordsDispatch({ type: 'ADD', payload: { item: word } })
                }
              />
            );
          })}
        </Accordion.Wizzard>
      </StyledWrapperBaseMyWords>
    </>
  );
};

export default WordsPage;
