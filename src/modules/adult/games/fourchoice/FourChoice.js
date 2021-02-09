import React, {
  useState,
  createContext,
  useContext,
  Children,
  useEffect,
} from 'react';
import styled from 'styled-components';
import StyledDifficultyLevel from 'modules/adult/games/components/molecules/StyledDifficultyLevel';
import StyledProgressLevel from 'modules/adult/games/components/molecules/StyledProgressLevel';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 60px;
`;
const StyledWrapperChoices = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 40px;
  width: 80%;
  height: 200px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
`;
const StyledWrapperSlajd = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;
  justify-content: center;
  gap: 60px;
  min-height: 400px;
  min-width: 700px;
  box-shadow: 10.81px 10.81px 15px #a896a0, -10.81px -10.81px 15px #ffe6f4;
`;

const Choice = styled.button`
  padding: 30px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.second};
  background-color: ${({ theme }) => theme.white};
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.second};
  }
`;

const WizzardContext = createContext({
  currentPage: 0,
  pageLength: 0,
  setCurrentPage: () => {},
  tasks: [],
});

const Slajd = ({ children, data }) => {
  const { currentPage, setCurrentPage } = useContext(WizzardContext);
  const handleCheckAnswer = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <StyledWrapperSlajd>
      {children}

      <Target target={data.target} />
      <Choices choices={data.choices} />
      <ProgressAndPoints />
      <DifficultyLevel />
    </StyledWrapperSlajd>
  );
};
const Target = ({ target }) => {
  return <div style={{ color: target.color }}>{target}</div>;
};

const Choices = ({ choices }) => {
  const { currentPage, setCurrentPage, tasks } = useContext(WizzardContext);
  const handleCheckAnswer = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <StyledWrapperChoices>
        {choices.map((item) => {
          return (
            <Choice onClick={() => handleCheckAnswer()}>
              {item.translate}
            </Choice>
          );
        })}
      </StyledWrapperChoices>
    </>
  );
};

const ProgressAndPoints = () => {
  const { currentPage, progress, pageLength } = useContext(WizzardContext);

  return (
    <StyledProgressLevel
      pageLength={pageLength}
      progress={progress}
      currentPage={currentPage}
    />
  );
};

const DifficultyLevel = () => {
  const { progress, difficultyLevel } = useContext(WizzardContext);

  return (
    <StyledDifficultyLevel
      difficultyLevel={difficultyLevel}
      progress={progress}
    />
  );
};

const Wizzard = ({ children, data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLength, setPageLength] = useState(0);
  const [progress, setProgress] = useState(10);
  const [difficultyLevel, setDifficultyLevel] = useState(1);

  const pageLenthPercentage = 100 / Children.toArray(children).length;

  useEffect(() => {
    setPageLength(Children.toArray(children).length);
    setProgress(pageLenthPercentage);
  }, []);
  const handleChangeDifficulty = () => {
    if (difficultyLevel.value == 10) {
      return 1;
    } else {
      return difficultyLevel.value + 1;
    }
  };
  useEffect(() => {
    setProgress((currentPage + 1) * pageLenthPercentage);
    let actualDifficultyLevel = {
      level: difficultyLevel.level,
      value: handleChangeDifficulty(),
    };
    setDifficultyLevel(actualDifficultyLevel);
  }, [currentPage]);

  return (
    <WizzardContext.Provider
      value={{
        currentPage,
        pageLength,
        setCurrentPage,
        difficultyLevel,
        progress,
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

export { Slajd, Wizzard };
