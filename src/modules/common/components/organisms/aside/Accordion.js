import React, { useState, createContext, Children, useContext } from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';

import Label from 'modules/common/components/atoms/texts/Labels/Labels';
import ButtonEdit from 'modules/common/components/atoms/Buttons/ButtonEdit/ButtonEdit';
import ButtonDelete from 'modules/common/components/atoms/Buttons/ButtonDelete/ButtonDelete';
import { InputText } from 'modules/common/components/atoms/inputs/InputsText/InputsText';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`;
const StyledWrapperInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 0px;
  padding: 5px;
  margin-right: 40px;

  ${({ type }) =>
    type === 'MYWORD' &&
    css`
      width: 400px;
    `}
`;
const StyledSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledWrapperWord = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledWord = styled.p`
  color: blue;
  font-size: 20px;
  word-break: break-all;
  width: 200px;
`;
const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const StyledButtonsAction = styled.div`
  position: absolute;
  right: 50px;
  top: -20px;
  display: flex;
  flex-direction: row;
`;

const StyledArrow = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: -1px;
  right: -30px;
`;

const WizzardContext = createContext({
  currentElement: -1,
  setCurrentElement: () => {},
});

const Word = React.forwardRef((props, ref) => {
  const { editElement, setEditElement } = useContext(WizzardContext);
  const { name, value, label, isEdit } = props;

  return (
    <>
      <StyledWrapperWord>
        <Label text={label} />
        {isEdit ? (
          <InputText name={name} ref={ref} />
        ) : (
          <StyledWord>{value}</StyledWord>
        )}
      </StyledWrapperWord>
    </>
  );
});

const Item = (props) => {
  const {
    item,
    index,
    isActive,
    isEdit,
    handleDelete,
    handleAddFastWord,
    type,
  } = props;

  const { currentElement, setCurrentElement, setEditElement } = useContext(
    WizzardContext
  );
  const { register, handleSubmit, setError, errors } = useForm({
    defaultValues: {
      word_one: item['word_one'],
      word_two: item['word_two'],
      word_three: item['word_three'],
      word_thourth: item['word_thourth'],
    },
  });

  const onSubmit = (data) => {
    if (type === 'MYWORD') {
      // FETCH KTORY WYSYŁA DANY ELEMENT I DISPATCH KTORY EDYTUJE ELEMENT
      console.log(item);
      console.log(data);
    } else if (type === 'FASTWORD') {
      // DISPATCH KTORY EDUTUJE DANY ELEMENT
      console.log(data);
    }
  };

  const handleToogleDetail = (index) => {
    if (index != currentElement) {
      setCurrentElement(index);
    } else {
      setEditElement(null);
      setCurrentElement(null);
    }
  };
  const handleEditItem = (index) => {
    if (index != currentElement) {
      setEditElement(index);
      setCurrentElement(index);
    } else {
      setEditElement(null);
      setCurrentElement(null);
    }
  };

  return (
    <>
      <StyledWrapper>
        <StyledButtonsAction>
          {isEdit ? (
            <button onClick={() => handleEditItem(index)}>{'<-'}</button>
          ) : (
            <ButtonEdit onClick={() => handleEditItem(index)} />
          )}
          <ButtonDelete onClick={handleDelete} />
        </StyledButtonsAction>
        <StyledWrapperInner type={type}>
          <StyledSummary>
            <Word
              isEdit={isEdit}
              value={item['word_one']}
              label={'Słowo'}
              name="word_one"
              ref={register({ required: true })}
            />
            {type !== 'FASTWORD' && (
              <Word
                isEdit={isEdit}
                value={item['word_one']}
                label={'Tłumaczenie'}
                name="word_two"
                ref={register({ required: true })}
              />
            )}

            <StyledArrow onClick={() => handleToogleDetail(index)}>
              O
            </StyledArrow>
            {type !== 'FASTWORD' && (
              <button onClick={handleAddFastWord}>A</button>
            )}
          </StyledSummary>
          {isActive ? (
            <StyledDetails>
              <Word
                isEdit={isEdit}
                value={item['word_three']}
                label={'Tłumaczenie'}
                name="word_three"
                ref={register({ required: true })}
              />
              <Word
                isEdit={isEdit}
                value={item['word_one']}
                label={'Tłumaczenie'}
                name="word_thour"
                ref={register({ required: true })}
              />
            </StyledDetails>
          ) : null}
          {isEdit && (
            <button onClick={handleSubmit(onSubmit)}>Zatwierdź</button>
          )}
        </StyledWrapperInner>
      </StyledWrapper>
    </>
  );
};

const Wizzard = ({ children }) => {
  const [currentElement, setCurrentElement] = useState(null);
  const [editElement, setEditElement] = useState(null);

  const childrenWithProps = Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      index,
      isActive: index === currentElement,
      isEdit: index === editElement,
    });
  });

  return (
    <WizzardContext.Provider
      value={{ currentElement, setCurrentElement, editElement, setEditElement }}
    >
      {childrenWithProps}
    </WizzardContext.Provider>
  );
};

export { Item, Wizzard };
