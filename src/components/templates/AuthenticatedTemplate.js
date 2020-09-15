import React, { useContext } from 'react';
import styled from 'styled-components';
import { ToolContext } from 'contexts/ToolContext';
import Header from 'components/organisms/Header';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
const StyledWrapperMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
  width: 800px;
  margin: 0 auto;
`;

function AuthenticatedTemplate({ children }) {
  const { toolType, setToolType } = useContext(ToolContext);
  return (
    <>
      <StyledWrapper>
        <Header />
        <StyledWrapperMain>{children}</StyledWrapperMain>
      </StyledWrapper>
    </>
  );
}

export default AuthenticatedTemplate;
