import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { ActualBaseContext } from 'contexts/ActualBaseContext';
import { BaseContext } from 'contexts/BaseContext';
import { FastWordsContext } from 'contexts/FastWordsContext';

import { StyledWrapper, StyledForm } from './Styles';

import FetchAddWord from 'interactions/FetchAddWord';

import InputTextLabelAndError from 'modules/common/components/molecules/InputTextLabelAndError/InputTextLabelAndError';
import { InputSelect } from '../../../atoms/inputs/InputsSelect/InputsSelect';

interface FormNewWordProps {
  type: string;
  wordsPage: boolean;
  base: any;
  setIsAdding: () => void;
}

type ContextType = {
  fastWordsState: never[];
  fastWordsDispatch: (type: any) => any;
};

const FormNewWord: React.FC<FormNewWordProps> = ({
  type,
  wordsPage,
  base,
  setIsAdding,
}) => {
  const { register, handleSubmit, setError, errors } = useForm();
  const { actualBaseState, actualBaseDispatch } = useContext(ActualBaseContext);
  const { fastWordsDispatch } = useContext(FastWordsContext) as ContextType;
  const { basesState, basesDispatch } = useContext(BaseContext);

  const onSubmit = (data: any) => {
    let newWord = {};

    let newBase = {};
    if (type === 'FASTWORD') {
      newWord = {
        word_one: data.word_one,
        word_two: data.word_two,
        word_three: data.word_three,
      };
      fastWordsDispatch({
        type: 'ADD',
        payload: { item: newWord },
      });
      setIsAdding();
    } else if (type === 'WORDBASE') {
      newWord = {
        word_one: data.word_one,
        word_two: data.word_two,
        word_three: data.word_three,
        author: { id: 1, username: 'snikers' },
      };
      newBase = {
        id: base.id,
        author: {
          id: base.author.id,
          username: base.author.username,
        },
        basetype: base.basetype,
        basename: base.basename,
        words: [...base.words, newWord],
        fromWhoCopied: 1,
        observed_by: base.observed_by,
      };
      FetchAddWord({
        data: newBase,
        base: base,
        dispatch: actualBaseDispatch,
      }).then((res) => {
        if (res.statusText == 'OK') {
          basesDispatch({
            type: 'ADD_WORD_TO_BASE',
            payload: {
              base: base,
              word: res.data.words[res.data.words.length - 1],
            },
          });
          setIsAdding();
        }
        if (res.statusText !== 'OK') {
          // handle errors from django
        }
      });
    } else if (type === 'WORDRELAY') {
      const baseChoosed = JSON.parse(data.basename);
      newWord = {
        word_one: data.word_one,
        word_two: data.word_two,
        word_three: data.word_three,
        author: { id: 1, username: 'snikers' },
      };
      newBase = {
        id: baseChoosed.id,
        author: {
          id: baseChoosed.author.id,
          username: baseChoosed.author.username,
        },
        basetype: baseChoosed.basetype,
        basename: baseChoosed.basename,
        words: [...baseChoosed.words, newWord],
        fromWhoCopied: 1,
        observed_by: baseChoosed.observed_by,
      };
      FetchAddWord({
        data: newBase,
        base: baseChoosed,
        dispatch: actualBaseDispatch,
      }).then((res) => {
        if (res.statusText == 'OK') {
          setIsAdding();
          basesDispatch({
            type: 'ADD_WORD_TO_BASE',
            payload: {
              base: baseChoosed,
              word: res.data.words[res.data.words.length - 1],
            },
          });
        }
        if (res.statusText !== 'OK') {
          // handle errors from django
        }
      });
    } else if (type === 'MYWORD') {
      newWord = {
        word_one: data.word_one,
        word_two: data.word_two,
        word_three: data.word_three,
        author: { id: actualBaseState.author.id, username: 'snikers' },
      };
      newBase = {
        id: actualBaseState.id,
        author: {
          id: actualBaseState.author.id,
          username: actualBaseState.author.username,
        },
        basetype: actualBaseState.basetype,
        basename: actualBaseState.basename,
        words: [...actualBaseState.words, newWord],
        fromWhoCopied: 1,
        observed_by: [],
      };

      FetchAddWord({
        data: newBase,
        base: actualBaseState,
        dispatch: actualBaseDispatch,
      }).then((res) => {
        if (res.statusText == 'OK') {
          actualBaseDispatch({
            type: 'ADD_WORD',
            payload: { word: res.data.words[res.data.words.length - 1] },
          });
          setIsAdding();
        }
        if (res.statusText !== 'OK') {
          // handle errors from django
        }
      });
    }
  };

  return (
    <>
      <StyledWrapper base={base}>
        <StyledForm wordsPage={wordsPage} onSubmit={handleSubmit(onSubmit)}>
          <div>
            {type === 'FASTWORD' ? (
              <h3>Dodaj słowo do niezbędnika</h3>
            ) : (
              <>
                {base && <p>{`Dodaj słowo do ${base && base.basename}`}</p>}

                {base === undefined && (
                  <InputSelect
                    name={'basename'}
                    options={basesState}
                    ref={register}
                  />
                )}
              </>
            )}
          </div>

          <InputTextLabelAndError
            placeholder={'np: jabłko'}
            text={'Słowo'}
            name="word_one"
            errors={errors}
            ref={register({ required: 'To pole jest wymagane' })}
          />

          <InputTextLabelAndError
            text={'Tłumaczenie'}
            placeholder={'np: apple'}
            name="word_two"
            errors={errors}
            ref={register({ required: 'To pole jest wymagane' })}
          />

          <InputTextLabelAndError
            text={'Skojarzenie'}
            placeholder={'np: newton'}
            errors={errors}
            name="word_three"
            ref={register({ required: 'To pole jest wymagane' })}
          />

          <InputTextLabelAndError
            text={'Przykład'}
            placeholder={'np: The newton eats apple'}
            errors={errors}
            name="word_thourth"
            ref={register()}
          />

          <button type="submit">Dodaj</button>
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

export default FormNewWord;
