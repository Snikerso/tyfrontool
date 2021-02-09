import React, {
  useState,
  Children,
  useContext,
  createContext,
  useEffect,
} from 'react';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { RelayContext } from 'contexts/RelayContext';
import { FastWordsContext } from 'contexts/FastWordsContext';
import { BaseContext } from 'contexts/BaseContext';

import { InputRadio } from 'modules/common/components/atoms/inputs/InputsRadio/InputsRadio';
import { InputSelect } from 'modules/common/components/atoms/inputs/InputsSelect/InputsSelect';
import { HeadGameRelay } from 'modules/common/components/atoms/texts/Heads/Heads';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: 70px;
  width: 300px;
  height: 300px;
  background: linear-gradient(
    321.7deg,
    rgba(252, 252, 252, 0.8) 15.1%,
    rgba(247, 247, 247, 0.8) 84.43%
  );
  background-color: ${({ theme }) => theme.white};
  border-radius: 50px;
  z-index: 2;
  overflow: hidden;

  ${({ base }) =>
    base &&
    css`
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    `}
`;

const StyledWrapperTab = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  align-items: center;
  align-content: space-between;
  background: linear-gradient(321.7deg, #fcfcfc 15.1%, #f7f7f7 84.43%);
  box-shadow: -1.11373px -1.11373px 2.22745px #ffffff,
    1.11373px 1.11373px 6px rgba(132, 132, 132, 0.5),
    4.4549px 4.4549px 16.7059px rgba(132, 132, 132, 0.3),
    -3.34118px -3.34118px 12px #ffffff;
  border-radius: 16.7059px;
`;
const StyledWrapperTabContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;
const StyledWrapperTabSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
const StyledTab = styled.div`
  text-align: center;
  margin: 15px;
  box-shadow: -4px -4px 4px #ffffff, 4px 4px 4px rgba(132, 132, 132, 0.4),
    inset -4px -4px 4px rgba(132, 132, 132, 0.1);

  :hover {
    cursor: pointer;
  }
  ${({ enabled }) =>
    enabled &&
    css`
      background-color: white;
    `}
  ${({ right }) =>
    right &&
    css`
      box-shadow: -4px -4px 4px #ffffff, 4px 4px 4px rgba(132, 132, 132, 0.4),
        inset -4px -4px 4px rgba(132, 132, 132, 0.1);
      border-radius: 0px 0px 10px 0px;
    `}
`;
const StyledWprapperButtonControls = styled.div`
  display: flex;
`;
const ButtonControl = styled.button`
  border: none;
  width: 108px;
  height: 39px;
  background: linear-gradient(321.7deg, #fcfcfc 15.1%, #f7f7f7 84.43%);
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 3px #a6a4a4,
    3px 3px 11px rgba(255, 255, 255, 0.44), -2px -2px 24px #ffffff;
  border-radius: 70px;
`;

const StyledWrapperRadioLabel = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-left: 10px;
  }
`;

const WizzardContext = createContext({
  currentPage: 0,
  pageLength: 0,
  redirect: false,
  setRedirect: () => {},
  setCurrentPage: () => {},
});

const Navbreadcrumb = ({ children, data }) => {
  const { currentPage, setCurrentPage } = useContext(WizzardContext);
  const breadcrumbs = [
    { id: 1, name: 'Wybór Gry', right: false },
    { id: 2, name: 'Wybór Słówek', right: true },
  ];

  return (
    <StyledWrapperTab>
      {breadcrumbs.map((item, key) => {
        return (
          <StyledTab
            key={item.id}
            right={item.right}
            enabled={currentPage == key ? true : false}
            onClick={() => setCurrentPage(key)}
          >
            {item.name}
          </StyledTab>
        );
      })}
    </StyledWrapperTab>
  );
};

const Slajd = ({ children, data }) => {
  const {
    currentPage,
    setCurrentPage,
    handleStartGame,
    setIsOpenGameRelay,
  } = useContext(WizzardContext);

  return (
    <StyledWrapperTabContent>
      {children}
      <StyledWprapperButtonControls>
        {currentPage === 0 ? (
          <ButtonControl
            location={{ x: 0, y: 0 }}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled
          >
            wstecz
          </ButtonControl>
        ) : (
          <ButtonControl onClick={() => setCurrentPage(currentPage - 1)}>
            wstecz
          </ButtonControl>
        )}
        {currentPage === 1 ? (
          <ButtonControl
            onClick={() => {
              handleStartGame();
              setIsOpenGameRelay(false);
            }}
          >
            Graj
          </ButtonControl>
        ) : null}
        {currentPage === 1 ? null : (
          <ButtonControl
            location={{ x: 0, y: 0 }}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            dalej
          </ButtonControl>
        )}
      </StyledWprapperButtonControls>
    </StyledWrapperTabContent>
  );
};
const Wizzard = ({ children, setIsOpenGameRelay }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [redirect, setRedirect] = useState(false);

  function handleStartGame() {
    setRedirect(true);
  }
  useEffect(() => {
    setCurrentPage(0);
  }, []);

  if (redirect === true) {
    return <Redirect to="/game-relay/four-choice" />;
  }

  return (
    <WizzardContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        redirect,
        handleStartGame,
        setIsOpenGameRelay,
      }}
    >
      <Navbreadcrumb />
      {Children.map(children, (child, i) => {
        if (currentPage === i) return child;
        if (Children.toArray(children).length === i) {
          return child;
        }
      })}
    </WizzardContext.Provider>
  );
};

function GameRelay({ base, game, words, setIsOpenGameRelay }) {
  const { fastWords, setFastWords } = useContext(FastWordsContext);
  const { relayState, relayDispatch } = useContext(RelayContext);
  const { basesState } = useContext(BaseContext);

  useEffect(() => {
    if (game) {
      relayDispatch({
        type: 'GAMENAME',
        payload: { gamename: game },
      });
    }
    if (words) {
      relayDispatch({
        type: 'WORDS',
        payload: { isBaseWords: true, basename: 'RESERCH' },
      });
    }
  }, []);

  return (
    <>
      <StyledWrapper base={base}>
        <Wizzard setIsOpenGameRelay={setIsOpenGameRelay}>
          <Slajd>
            <StyledWrapperTabSection>
              <HeadGameRelay text={'Wybierz grę'} />
              <InputSelect
                options={[{ id: 1, value: 'FOURCHOICE', text: '4Wybory' }]}
                onChange={(e) =>
                  relayDispatch({
                    type: 'GAMENAME',
                    payload: { gamename: e.target.value },
                  })
                }
              />
            </StyledWrapperTabSection>
            <StyledWrapperTabSection>
              <HeadGameRelay text={'Wybierz poziom trudności'} />

              <StyledWrapperRadioLabel>
                <InputRadio
                  value={true}
                  checked={relayState.isAutomationDifficult === true}
                  name="difficulty"
                  title="Wordy decyduje"
                  onChange={(e) =>
                    relayDispatch({
                      type: 'DIFFICULT',
                      payload: {
                        isAutomationDifficult: true,
                        difficultylevel: 0,
                      },
                    })
                  }
                />
                {/* <LabelGameRelay text="Automatyczny" /> */}
              </StyledWrapperRadioLabel>
              <StyledWrapperRadioLabel>
                <InputRadio
                  value={false}
                  checked={relayState.isAutomationDifficult === false}
                  name="difficulty"
                  title="Poziom wybrany przez Ciebie"
                  onChange={(e) =>
                    relayDispatch({
                      type: 'DIFFICULT',
                      payload: {
                        isAutomationDifficult: false,
                        difficultylevel: 0,
                      },
                    })
                  }
                />
              </StyledWrapperRadioLabel>
              <select
                value={relayState.diffcultyLevel}
                disabled={relayState.isAutomationDifficult === true}
                onChange={(e) =>
                  relayDispatch({
                    type: 'DIFFICULT',
                    payload: {
                      isAutomationDifficult: false,
                      difficultylevel: parseInt(e.target.value),
                    },
                  })
                }
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <option key={item} value={item}>
                      Poziom {item}
                    </option>
                  );
                })}
              </select>
            </StyledWrapperTabSection>
          </Slajd>
          <Slajd>
            <StyledWrapperTabSection>
              <StyledWrapperRadioLabel>
                <InputRadio
                  value={true}
                  checked={relayState.isBaseWords === true}
                  name="words"
                  title="Wordy decyduje"
                  onChange={(e) =>
                    relayDispatch({
                      type: 'WORDS',
                      payload: { isBaseWords: true, basename: '' },
                    })
                  }
                />
              </StyledWrapperRadioLabel>

              <select
                defaultValue={basesState[0].basename}
                disabled={relayState.isBaseWords === false}
                value={relayState.basename}
                onChange={(e) =>
                  relayDispatch({
                    type: 'WORDS',
                    payload: {
                      isWordyDifficult: false,
                      basename: e.target.value,
                    },
                  })
                }
              >
                <optgroup label="Moje bazy">
                  {basesState.map(({ basename }) => {
                    return (
                      <option key={basename} value={basename}>
                        {basename}
                      </option>
                    );
                  })}
                </optgroup>
                <optgroup label="Adoptowane bazy"></optgroup>
                <optgroup label="Obserwowane bazy"></optgroup>
              </select>
              <StyledWrapperRadioLabel>
                <InputRadio
                  value={false}
                  checked={relayState.isBaseWords === false}
                  name="words"
                  title="Twoje min. 10 słówek"
                  disabled
                  onChange={(e) =>
                    relayDispatch({
                      type: 'WORDS',
                      payload: { isBaseWords: false, fastWords: [{ id: 1 }] },
                    })
                  }
                />
              </StyledWrapperRadioLabel>
            </StyledWrapperTabSection>
          </Slajd>
        </Wizzard>
      </StyledWrapper>
    </>
  );
}

export default GameRelay;
