import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { BaseContext } from 'contexts/BaseContext';
import { InputText } from 'modules/common/components/atoms/inputs/InputsText/InputsText';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;

  ${({ wordsPage }) =>
    wordsPage &&
    css`
      height: 100px;
      flex-direction: row;
      justify-items: center;
      align-items: center;
    `}
`;

const Error = styled.div`
  color: red;
`;

const FormNewBase = ({ wordsPage }) => {
  const { register, handleSubmit, setError, errors } = useForm();
  const { basesState, basesDispatch } = useContext(BaseContext);

  const onSubmit = (data) => {
    let newBase = {
      basename: data.basename,
      basetype: 'WORDS',
      description: data.description,
      languageFrom: data.languageFrom,
      languageTo: data.languageTo,
      fromWhoAdopted: 1,
      observed_by: [],
      words: [],
    };

    fetch(`http://127.0.0.1:8000/wordlist/base/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      method: 'POST',
      body: JSON.stringify(newBase),
    })
      .then((response) => response.json())
      .then((data) => basesDispatch({ type: 'ADD', payload: { base: data } }));
  };

  return (
    <StyledWrapper>
      <StyledForm wordsPage={wordsPage} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nazwa nowej bazy</label>
          <InputText
            name={'basename'}
            onChange={(e) => {
              if (e.target.value.length > 10) {
                setError('basename', {
                  type: 'manual',
                  message: 'Dont Forget Your Username Should Be Cool!',
                });
              }
            }}
            ref={register({ required: true })}
          />
          {errors.basename && <Error>{errors.basename.message}</Error>}
        </div>
        <div>
          <label>Z języka</label>
          <select
            value="ENG"
            ref={register({ required: true })}
            name={'languageFrom'}
          >
            <option value={'ENG'}>flaga - English</option>
            <option value={'PL'}>flaga - Polish</option>
          </select>
          {errors.languageFrom && <Error>{errors.languageFrom.message}</Error>}
        </div>
        <div>
          <label>Na język</label>
          <select
            value="ENG"
            ref={register({ required: true })}
            name={'languageTo'}
          >
            <option value={'ENG'}>flaga - English</option>
            <option value={'PL'}>flaga - Polish</option>
          </select>
          {errors.languageTo && <Error>{errors.languageTo.message}</Error>}
        </div>
        <div>
          <label>Opis bazy</label>
          <input
            type="text"
            name="description"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.description && <Error>{errors.description.message}</Error>}
        </div>

        <button type="submit">Add</button>
      </StyledForm>
    </StyledWrapper>
  );
};

export default FormNewBase;
