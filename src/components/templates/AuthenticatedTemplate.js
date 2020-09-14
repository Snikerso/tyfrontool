import React, { useContext } from 'react';
import styled from 'styled-components';
import { ToolContext } from 'contexts/ToolContext';
import Navigation from 'components/organisms/Navigation';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Header = styled.header`
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid black;
`;

function AuthenticatedTemplate({ children }) {
  const { toolType, setToolType } = useContext(ToolContext);
  return (
    <>
      <StyledWrapper>
        <Header>
          {toolType == 'SCIENCE' ? <h1>ScienceTool</h1> : <h1>ArtTool</h1>}

          <Navigation />
        </Header>
        <main>{children}</main>
      </StyledWrapper>
    </>
  );
}

export default AuthenticatedTemplate;
