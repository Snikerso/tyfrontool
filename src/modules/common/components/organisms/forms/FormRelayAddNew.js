import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  Children,
} from 'react';
import styled from 'styled-components';

import CustomModal from 'modules/common/components/organisms/modal/Modal/Modal';
import FormNewBase from 'modules/common/components/organisms/forms/FormNewBase';
import FormNewWord from 'modules/common/components/organisms/forms/FormNewWord/FormNewWord';

import ButtonAdd from 'modules/common/components/atoms/Buttons/ButtonAdd/ButtonAdd';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledWrapperSlajd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WizzardContext = createContext({
  currentPage: 0,
  pageLength: 0,
  redirect: false,
  setRedirect: () => {},
  setCurrentPage: () => {},
});

const Slajd = ({ children }) => {
  const { currentPage, setCurrentPage, handleStartGame } = useContext(
    WizzardContext
  );

  return (
    <StyledWrapperSlajd>
      {currentPage === 0 ? (
        <>
          <button onClick={() => setCurrentPage(1)}>Dodaj nowe słow</button>
          <button onClick={() => setCurrentPage(2)}>Dodaj nową bazę</button>
          <button disabled>Wygeneruj słowa z tekstu</button>
        </>
      ) : (
        <>
          <button onClick={() => setCurrentPage(0)}>powrót</button>
          {children}
        </>
      )}
    </StyledWrapperSlajd>
  );
};

const Wizzard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [redirect, setRedirect] = useState(false);

  function handleStartGame() {
    setRedirect(true);
  }
  useEffect(() => {
    setCurrentPage(0);
  }, []);

  return (
    <WizzardContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        redirect,
        handleStartGame,
      }}
    >
      {Children.map(children, (child, i) => {
        if (currentPage === i) return child;
        if (Children.toArray(children).length === i) {
          return child;
        }
      })}
    </WizzardContext.Provider>
  );
};

const FormRelayAddNew = ({ disabled }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledWrapper>
        <ButtonAdd
          isOpen={openModal}
          text={'Dodaj'}
          disabled={disabled}
          onClick={() => setOpenModal((prev) => !prev)}
        />
      </StyledWrapper>

      <CustomModal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <Wizzard>
          <Slajd></Slajd>
          <Slajd>
            <FormNewWord
              setIsAdding={() => setOpenModal(false)}
              type={'WORDRELAY'}
            />
          </Slajd>
          <Slajd>
            <FormNewBase />
          </Slajd>
        </Wizzard>
      </CustomModal>
    </>
  );
};

export default FormRelayAddNew;
