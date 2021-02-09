import React from 'react';
import styled from 'styled-components';
import Header from 'modules/common/components/organisms/header/Header';
import AsideLeft from 'modules/common/components/organisms/aside/AsideLeft';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
const StyledWrapperMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  margin: 40px auto;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

function UnauthenticatedTemplate({ children, authState, authDispatch }) {
  return (
    <>
      <StyledWrapper>
        <Header authState={authState} authDispatch={authDispatch} />
        <AsideLeft authState={authState} />
        <StyledWrapperMain>{children}</StyledWrapperMain>
      </StyledWrapper>
    </>
  );
}

export default UnauthenticatedTemplate;
