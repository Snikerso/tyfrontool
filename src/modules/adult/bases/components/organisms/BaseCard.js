import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { AuthContext } from 'contexts/AuthContext';
import { BaseContext } from 'contexts/BaseContext';

import ButtonRightTab from 'modules/adult/bases/components/atoms/ButtonRightTab';
import GameRelay from 'modules/common/components/organisms/gamerelay/GameRelay';
import FormNewWord from 'modules/common/components/organisms/forms/FormNewWord/FormNewWord';

import { StyledHeaderBaseCard } from 'modules/common/components/atoms/texts/Heads/Heads';
import ButtonPlay from 'modules/common/components/atoms/Buttons/ButtonPlay/ButtonPlay';
import ButtonEdit from 'modules/common/components/atoms/Buttons/ButtonEdit/ButtonEdit';
import ButtonClose from 'modules/common/components/atoms/Buttons/ButtonClose/ButtonClose';
import ButtonAdd from 'modules/common/components/atoms/Buttons/ButtonAdd/ButtonAdd';
import ButtonDelete from 'modules/common/components/atoms/Buttons/ButtonDelete/ButtonDelete';

const StyledWrapperBaseCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledActionTopButtons = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  margin: 0px 20px 0px 0px;
  height: 60px;
  > * {
    margin-left: 10px;
  }
`;
const StyledWrapperActionInnerButtons = styled.div`
  display: flex;
  align-self: center;
  margin: 10px;
  > * {
    margin: 10px;
  }
`;
const StyledWrapperRightButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;
const StyledWrapperBaseCardAndRightButtons = styled.div`
  display: flex;
  align-self: center;
`;
const StyledBaseCard = styled.div`
  position: relative;
  display: grid;
  justify-items: center;

  grid-template-rows: 1fr 40%;

  background: linear-gradient(
    321.7deg,
    rgba(252, 252, 252, 0.8) 15.1%,
    rgba(247, 247, 247, 0.8) 84.43%
  );
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 3px #a6a4a4,
    3px 3px 11px rgba(255, 255, 255, 0.44), -2px -2px 24px #ffffff;
  border-radius: 15px;
  width: 270px;
  height: 250px;
  padding: 10px;
`;
const StyledWrapperMoreInformationCard = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 2px solid black;
`;

const BaseCard = ({ game, item, baseType }) => {
  const [isOpenGameRelay, setIsOpenGameRelay] = useState(false);
  const [isOpenFormNewWord, setIsOpenFormNewWord] = useState(false);
  const [isOpenWordsInformations, setIsOpenWordsInformations] = useState(false);
  const [isOpenObservations, setIsOpenObservations] = useState(false);
  const [isOpenAdoptions, setIsOpenAdoptions] = useState(false);
  const { basesDispatch } = useContext(BaseContext);
  const { authState } = useContext(AuthContext);

  const handleClose = () => {
    setIsOpenFormNewWord(false);
    setIsOpenGameRelay(false);
    setIsOpenWordsInformations(false);
    setIsOpenObservations(false);
    setIsOpenAdoptions(false);
  };

  const handleDelete = () => {
    fetch(`http://127.0.0.1:8000/wordlist/base/${item.id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    }).then((res) => {
      basesDispatch({
        type: 'DELETE',
        payload: { base: item.id },
      });
    });
  };

  const handleObserve = () => {
    let newObservator = {
      id: 2,
      username: 'snikers',
    };

    let observeBase = {
      id: item.id,
      observed_by: [...item.observed_by, newObservator],
    };

    fetch(`http://127.0.0.1:8000/wordlist/observebase/${item.id}/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      method: 'PUT',
      body: JSON.stringify(observeBase),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const handleAdopt = () => {
    let adoptedBase = {
      basename: item.basename,
      basetype: item.basetype,
      description: item.description,
      languageFrom: item.languageFrom,
      languageTo: item.languageTo,
      fromWhoAdopted: 1,
      isAdopt: true,
      words: [...item.words],
      observed_by: [...item.observed_by],
    };
    fetch(`http://127.0.0.1:8000/wordlist/base/observe/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      method: 'PUT',
      body: JSON.stringify(adoptedBase),
    })
      .then((response) => response.json())
      .then((data) => basesDispatch({ type: 'ADD', payload: { base: data } }));

    // wyslanie informacji do istniejacej bazy czyli dodanie do many to many field zalogowanego uzytkownika do listy forków
  };

  return (
    <>
      <StyledWrapperBaseCard>
        {isOpenGameRelay ||
        isOpenFormNewWord ||
        isOpenAdoptions ||
        isOpenWordsInformations ||
        isOpenObservations ? (
          <>
            <StyledActionTopButtons>
              <ButtonClose onClick={() => handleClose()} />
            </StyledActionTopButtons>
          </>
        ) : (
          <>
            <StyledActionTopButtons>
              {baseType === 'MYBASES' && (
                <>
                  <NavLink to={`base/${item.id}`}>
                    <ButtonEdit />
                  </NavLink>
                </>
              )}

              {baseType === 'MYBASES' && (
                <ButtonDelete
                  type="BASE"
                  basesDispatch={basesDispatch}
                  base={item.base}
                  item={item}
                  onClick={() => handleDelete()}
                />
              )}
            </StyledActionTopButtons>
          </>
        )}
        <StyledWrapperBaseCardAndRightButtons>
          <StyledBaseCard key={item.id}>
            <div>
              <StyledHeaderBaseCard>{item.basename}</StyledHeaderBaseCard>
              <p>{item.description}</p>
              <p>poziom wypełnienia: 23% </p>
              {baseType !== 'MYBASES' && (
                <>
                  <NavLink to={`community/${item.id}`}>
                    <button>Zajrzyj</button>
                  </NavLink>
                </>
              )}
            </div>
            <StyledWrapperActionInnerButtons>
              <ButtonPlay
                text={'Zagraj'}
                onClick={() => setIsOpenGameRelay((prev) => !prev)}
                isOpenGameRelay={isOpenGameRelay}
              />
              {baseType === 'OBSERVEDBASES' ? (
                <button>adoptuj</button>
              ) : (
                <ButtonAdd
                  text={'Dodaj słówko'}
                  onClick={() => setIsOpenFormNewWord((prev) => !prev)}
                  disabled={authState.isAuth}
                />
              )}
            </StyledWrapperActionInnerButtons>

            {isOpenFormNewWord && (
              <FormNewWord type={'WORDBASE'} isBase={true} base={item} />
            )}
            {isOpenGameRelay && <GameRelay base={item} />}
            {isOpenWordsInformations && (
              <StyledWrapperMoreInformationCard base={item}>
                lista słowek
              </StyledWrapperMoreInformationCard>
            )}
            {isOpenAdoptions && (
              <StyledWrapperMoreInformationCard base={item}>
                lista adopcji
              </StyledWrapperMoreInformationCard>
            )}
            {isOpenObservations && (
              <StyledWrapperMoreInformationCard base={item}>
                lista obserwacji
              </StyledWrapperMoreInformationCard>
            )}
          </StyledBaseCard>

          <StyledWrapperRightButtons>
            <ButtonRightTab
              position={25}
              onClick={() => setIsOpenWordsInformations(true)}
              number={item.words.length}
            />
            <ButtonRightTab
              position={85}
              onClick={() => setIsOpenAdoptions(true)}
              number={item.words.length}
            />
            <ButtonRightTab
              position={145}
              onClick={() => setIsOpenObservations(true)}
              number={item.words.length}
            />
          </StyledWrapperRightButtons>
        </StyledWrapperBaseCardAndRightButtons>
      </StyledWrapperBaseCard>
    </>
  );
};

export default BaseCard;
