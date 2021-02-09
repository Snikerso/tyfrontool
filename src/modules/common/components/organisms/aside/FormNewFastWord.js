import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { LabelFormAddWord } from 'modules/common/components/atoms/Labels';
import { InputText } from 'modules/common/components/atoms/InputsText';
import { FastWordsContext } from 'contexts/FastWordsContext';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    321.7deg,
    rgba(252, 252, 252, 0.8) 15.1%,
    rgba(247, 247, 247, 0.8) 84.43%
  );
  background-color: ${({ theme }) => theme.white};

  ${({ base }) =>
    base &&
    css`
      position: absolute;
      top: 0px;
      left: 0px;
    `}
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  ${({ wordsPage }) =>
    wordsPage &&
    css`
      flex-direction: row;
      justify-items: center;
      align-items: center;
    `}
`;

const Error = styled.div`
  color: red;
`;

const FormNewFastWord = ({ isBase, type, wordsPage, base }) => {
  const { register, handleSubmit, setError, errors } = useForm();
  const { fastWordsState, fastWordsDispatch } = useContext(FastWordsContext);

  const onSubmit = (data) => {
    let word = {
      word_one: data.word_one,
      word_two: data.word_two,
      word_three: data.word_three,
    };

    fastWordsDispatch({ type: 'ADD', payload: { item: word } });
  };

  return (
    <>
      <StyledWrapper base={base}>
        <StyledForm wordsPage={wordsPage} onSubmit={handleSubmit(onSubmit)}>
          <>
            <div>
              {base && (
                <LabelFormAddWord
                  text={`Dodaj słowo do ${base && base.basename}`}
                />
              )}

              {errors.word && <Error>This field is required</Error>}
            </div>
            <div>
              <LabelFormAddWord text={'słowo'} />
              <InputText name="word_one" ref={register({ required: true })} />
              {errors.word && <Error>This field is required</Error>}
            </div>
            <div>
              <LabelFormAddWord text={'Tłumaczenie'} />
              <InputText name="word_two" ref={register({ required: true })} />
            </div>
            <div>
              <LabelFormAddWord text={'Skojarzenie'} />
              <InputText
                type="text"
                name="word_three"
                ref={register({ required: true })}
              />
            </div>
            <div>
              <LabelFormAddWord text={'Przykład'} />
              <InputText
                type="text"
                name="word_thourth"
                ref={register({ required: true })}
              />
            </div>
          </>

          <button type="submit">Dodaj</button>
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

export default FormNewFastWord;
