import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ActualBaseContext } from 'contexts/ActualBaseContext';
import ButtonPlay from 'modules/common/components/atoms/Buttons/ButtonPlay/ButtonPlay';
import ButtonEdit from 'modules/common/components/atoms/Buttons/ButtonEdit/ButtonEdit';
import ButtonClose from 'modules/common/components/atoms/Buttons/ButtonClose/ButtonClose';
import ButtonAdd from 'modules/common/components/atoms/Buttons/ButtonAdd/ButtonAdd';
import ButtonDelete from 'modules/common/components/atoms/Buttons/ButtonDelete/ButtonDelete';

import { StyledHeaderBaseCard } from 'modules/common/components/atoms/texts/Heads/Heads';
import GameRelay from 'modules/common/components/organisms/gamerelay/GameRelay';
import { BaseContext } from 'contexts/BaseContext';
import FormNewWord from 'modules/common/components/organisms/forms/FormNewWord/FormNewWord';

const StyledWrapperBaseCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledActionTopButtons = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  margin: 10px;
  min-height: 60px;
  max-height: 60px;
  > * {
    margin: 10px;
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
const StyledBaseCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    321.7deg,
    rgba(252, 252, 252, 0.8) 15.1%,
    rgba(247, 247, 247, 0.8) 84.43%
  );
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 3px #a6a4a4,
    3px 3px 11px rgba(255, 255, 255, 0.44), -2px -2px 24px #ffffff;
  border-radius: 50px;
  width: 300px;
  height: 300px;
  padding: 20px;
`;

const BaseCard = ({ game, item, community }) => {
  const [isOpenGameRelay, setIsOpenGameRelay] = useState(false);
  const [isOpenFormNewWord, setIsOpenFormNewWord] = useState(false);
  const { basesDispatch } = useContext(BaseContext);
  const { setActualBase } = useContext(ActualBaseContext);

  const handleClose = () => {
    setIsOpenFormNewWord(false);
    setIsOpenGameRelay(false);
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
        {isOpenGameRelay || isOpenFormNewWord ? (
          <>
            <StyledActionTopButtons>
              <ButtonClose onClick={() => handleClose()} />
            </StyledActionTopButtons>
          </>
        ) : (
          <>
            <StyledActionTopButtons>
              <NavLink
                to={community ? `community/${item.id}` : `base/${item.id}`}
              >
                {community ? (
                  <ButtonEdit onClick={() => setActualBase(item)} />
                ) : (
                  <ButtonEdit onClick={() => setActualBase(item)} />
                )}
              </NavLink>

              {community ? null : (
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

        <StyledBaseCard key={item.id}>
          <StyledHeaderBaseCard>{item.basename}</StyledHeaderBaseCard>

          {community && (
            <p>
              Autor: {item.author.username}
              <img />
            </p>
          )}

          <p>Ilość słówek: {item.words.length}</p>

          {!community && <p>poziom nauczenia: 23% </p>}

          <StyledWrapperActionInnerButtons>
            <ButtonPlay
              onClick={() => setIsOpenGameRelay((prev) => !prev)}
              isOpenGameRelay={isOpenGameRelay}
            />
            {community ? (
              <button
                onClick={() => handleAdopt()}
                title={'Dodaj do tą bazę do swoich'}
              >
                Dodaj tę bazę do swoich
              </button>
            ) : (
              <ButtonAdd
                onClick={() => setIsOpenFormNewWord((prev) => !prev)}
              />
            )}
          </StyledWrapperActionInnerButtons>
          {community && (
            <button onClick={handleObserve}>
              {/* {Object.values(item.observed_by[0]).includes('snikers')
                ? 'Obserwujesz'
                : 'Obserwuj'} */}
              {item.observed_by.length}
            </button>
          )}
          {item.isAdopt === true && (
            <p>
              {'Zapozyczony'}
              <img />
            </p>
          )}
          {isOpenFormNewWord && <FormNewWord isBase={true} base={item} />}
          {isOpenGameRelay && <GameRelay base={item} />}
        </StyledBaseCard>
      </StyledWrapperBaseCard>
    </>
  );
};

export default BaseCard;
