import React, { useState, useContext, createContext, Children } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  min-width: 300px;
  height: 300px;
  border: 2px solid black;
`;
const ButtonSwitch = styled.button`
  border: 2px solid black;
`;

const StyledWrapperInformationCompound = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledWrapperInformationCompoundInner = styled.div`
  display: flex;
  align-items: center;
`;

const WizzardContext = createContext({
  currentPage: 0,
  setCurrentPage: (currentPage: number) => {},
});

const ButtonSwitchers = ({ data }: any) => {
  const { currentPage, setCurrentPage } = useContext(WizzardContext);
  console.log(data);
  return (
    <div>
      {data.map((item: any, key: number) => {
        return (
          <ButtonSwitch onClick={() => setCurrentPage(key)}>
            {item}
          </ButtonSwitch>
        );
      })}
    </div>
  );
};

const Slajd = ({ children, data, buttons }: any) => {
  return (
    <StyledWrapperInformationCompoundInner>
      <Img />
      <ButtonSwitchers data={buttons} />
      <div>
        <h3>{data.head}</h3>
        <p>{data.text}</p>
      </div>
    </StyledWrapperInformationCompoundInner>
  );
};
const Wizzard = ({ children }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <WizzardContext.Provider
      value={{
        currentPage,
        setCurrentPage,
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

const InformationCompound = ({ head, data }: any) => {
  return (
    <>
      <StyledWrapperInformationCompound>
        <h1>{head}</h1>
        <Wizzard>
          {data.element.map((item: any) => {
            return <Slajd key={item.id} buttons={data.buttons} data={item} />;
          })}
        </Wizzard>
      </StyledWrapperInformationCompound>
    </>
  );
};

export default InformationCompound;
