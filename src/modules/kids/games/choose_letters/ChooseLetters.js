import React, {
  useState,
  createContext,
  useContext,
  Children,
  useEffect,
} from 'react';
import { useTouch } from './useTouch';
import styled from 'styled-components';
import Target from './Target';
import Choice from './Choice';
import {
  ButtonGradient,
  ButtonGradientWithHead,
} from 'modules/common/components/atoms/Buttons/Buttons';
import SvgDiffcultyStars from 'modules/kids/games/SvgDifficultyStars';

import TransitionSlajs from './TransitionSlajs';
import WordsChooseLetterGenerator from './WordsChooseLetterGenerator';

const StyledWrapper = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StyledWrapperDifficultyLevels = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin: 80px;
  }
`;
const StyledWrapperChoices = styled.div`
  width: 100%;
  height: 40%;
`;
const StyledWrapperSlajd = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  img {
    width: 230px;
  }
`;
const StyledWrapperTargets = styled.div`
  display: flex;

  svg {
    margin: 20px;
  }
`;

const WizzardContext = createContext({
  currentPage: 0,
  pageLength: 0,
  setCurrentPage: () => {},
  tasks: [],
});

const ChooseDifficultyLevel = ({ children }) => {
  const { currentPage, setCurrentPage, setDifficultyLevel } = useContext(
    WizzardContext
  );
  const handleChooseDifficultyLevel = ({ level }) => {
    setDifficultyLevel(level);
    setCurrentPage(currentPage + 1);
  };
  const difficultyLevels = [
    { id: 1, level: 1, width: '129' },
    // { id: 2, level: 2, width: '83' },
    // { id: 3, level: 3, width: '73' },
  ];
  return (
    <StyledWrapperDifficultyLevels>
      {difficultyLevels.map((item) => {
        return (
          <>
            <ButtonGradientWithHead text={`Poziom ${item.level}`}>
              <ButtonGradient
                key={item.id}
                onClick={() =>
                  handleChooseDifficultyLevel({ level: item.level })
                }
              >
                <SvgDiffcultyStars level={item.level} width={item.width} />
              </ButtonGradient>
            </ButtonGradientWithHead>
          </>
        );
      })}
    </StyledWrapperDifficultyLevels>
  );
};

const Slajd = ({ slajdData }) => {
  const {
    currentPage,
    setCurrentPage,
    slajdTransition,
    setSlajdTransition,
  } = useContext(WizzardContext);

  const {
    chooseLetterState,
    chooseLetterDispatch,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    targetsRef,
    choicesRef,
  } = useTouch({
    slajdData,
    currentPage,
  });
  const audio = new Audio(
    require(`assets/games/choose_letters/voices/${slajdData.voice}`)
  );
  audio.volume = 0.2;

  useEffect(() => {
    setTimeout(() => {
      return audio.play();
    }, 1000);
  }, [currentPage]);

  useEffect(() => {
    setSlajdTransition(true);

    setTimeout(() => {
      return setSlajdTransition(false);
    }, 1000);
  }, [currentPage]);

  useEffect(() => {
    if (
      slajdData.targets.map((item) => item.isCorrect).includes(false) === false
    ) {
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
      }, 500);
    }
  }, [chooseLetterState]);

  useEffect(() => {
    chooseLetterDispatch({
      type: 'CHANGESLAJD',
      payload: { slajdData: slajdData },
    });
  }, [currentPage]);

  if (slajdTransition === true && currentPage === 1) {
    return <TransitionSlajs welcome>Lets go</TransitionSlajs>;
  } else if (slajdTransition === true && currentPage !== 1) {
    return <TransitionSlajs>Bravo</TransitionSlajs>;
  } else {
    return (
      <StyledWrapperSlajd>
        <img
          width={160}
          src={require(`assets/games/choose_letters/animals/${slajdData.image}`)}
        />
        <StyledWrapperTargets>
          {slajdData.targets.map((item, key) => {
            return (
              <Target
                key={item.id}
                id={key}
                item={item}
                ref={(el) => (targetsRef.current[key] = el)}
              />
            );
          })}
        </StyledWrapperTargets>
        <StyledWrapperChoices>
          {slajdData.choices.map((item, key) => {
            return (
              <Choice
                key={item.id}
                id={key}
                handleTouchEnd={handleTouchEnd}
                handleTouchMove={handleTouchMove}
                handleTouchStart={handleTouchStart}
                item={item}
                ref={(el) => (choicesRef.current[key] = el)}
              />
            );
          })}
        </StyledWrapperChoices>
      </StyledWrapperSlajd>
    );
  }
};

const Wizzard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slajdTransition, setSlajdTransition] = useState(false);
  const [pageLength, setPageLength] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState(0);
  const [endGame, setEndGame] = useState(false);

  return (
    <WizzardContext.Provider
      value={{
        currentPage,
        pageLength,
        slajdTransition,
        setSlajdTransition,
        setCurrentPage,
        setDifficultyLevel,
        difficultyLevel,
      }}
    >
      <StyledWrapper>
        {Children.map(children, (child, i) => {
          if (currentPage === i) return child;
          if (Children.toArray(children).length === i) {
            return child;
          }
        })}
      </StyledWrapper>
    </WizzardContext.Provider>
  );
};

const ChooseLetters = () => {
  // Te dane przychodzą mi z backendu albo front jezeli bez logowania
  // Generator słów jeżeli jestes nie autoryzowany

  const gameWords = WordsChooseLetterGenerator({
    difficultyLevel: 1,
    language: 'PL',
  });

  return (
    <>
      <Wizzard>
        <ChooseDifficultyLevel />
        {gameWords.map((item) => {
          return <Slajd key={item.id} slajdData={item}></Slajd>;
        })}
        <div>Koniec </div>
      </Wizzard>
    </>
  );
};

export default ChooseLetters;
