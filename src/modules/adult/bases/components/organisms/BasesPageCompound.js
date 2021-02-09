import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  Children,
} from 'react';
import styled, { css } from 'styled-components';
import { AuthContext } from '../../../../../contexts/AuthContext';

const StyledWrapperButtonsSwitcher = styled.div`
  display: flex;

  > * {
    margin: 5px;
  }
`;

const StyledButtonSwitch = styled.button`
  outline: none;
  ${({ isActive }) =>
    isActive &&
    css`
      border: 2px solid red;
    `}
`;

const WizzardContext = createContext({
  currentPage: 0,
  setCurrentPage: () => {},
});

const ButtonsSwitch = ({ buttons }) => {
  const { setCurrentPage } = useContext(WizzardContext);

  return (
    <>
      <StyledWrapperButtonsSwitcher>
        {buttons.map((item) => {
          return (
            <ButtonSwitch
              key={item.id}
              item={item}
              onClick={() => setCurrentPage(item.id)}
            />
          );
        })}
      </StyledWrapperButtonsSwitcher>
    </>
  );
};
const ButtonSwitch = ({ onClick, item }) => {
  const { currentPage } = useContext(WizzardContext);
  return (
    <StyledButtonSwitch
      isActive={currentPage === item.id}
      disabled={item.disabled}
      onClick={onClick}
    >
      {item.name}
    </StyledButtonSwitch>
  );
};

const Slajd = ({ children }) => {
  return <div>{children}</div>;
};

const Wizzard = ({ children, setBases, basesState, authState }) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, []);
  useEffect(() => {
    switch (currentPage) {
      case 0:
        setBases(basesState);
        break;
      case 1:
        setBases([]);
        break;
      case 2:
        setBases([]);
        break;
      case 3:
        fetch(`http://127.0.0.1:8000/wordlist/observebases/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setBases(data[0]['observed_bases']);
          });
        break;
      default:
        setBases([]);
    }
  }, [currentPage]);

  let buttons = [];
  if (authState.isAuth === true) {
    buttons = [
      { id: 0, name: 'Moje Bazy', type: 'MYBASES', disabled: false },
      { id: 1, name: 'Wordkito Bazy', type: 'WORDKITOBASES', disabled: false },
      { id: 2, name: 'Adoptowane Bazy', type: 'ADOPTEDBASES', disabled: false },
      {
        id: 3,
        name: 'Obserwowane Bazy',
        type: 'OBSERVEDBASES',
        disabled: false,
      },
    ];
  } else {
    buttons = [
      { id: 0, name: 'Moje Bazy', type: 'MYBASES', disabled: false },
      { id: 1, name: 'Wordkito Bazy', type: 'WORDKITOBASES', disabled: false },
    ];
  }
  return (
    <WizzardContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      <ButtonsSwitch buttons={buttons} />
      {Children.map(children, (child, i) => {
        if (currentPage === i) return child;
        if (Children.toArray(children).length === i) {
          return child;
        }
      })}
    </WizzardContext.Provider>
  );
};

export { Slajd, Wizzard };
