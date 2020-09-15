import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ToolContext } from 'contexts/ToolContext';
import Navigation from 'components/organisms/Navigation';
import ToolChanger from 'components/molecules/ToolChanger';

const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid black;
`;

const Header = () => {
  const { toolType, setToolType } = useContext(ToolContext);
  return (
    <StyledWrapper>
      <ToolChanger toolType={toolType} setToolType={setToolType} />
      {toolType == 'SCIENCE' ? <h1>ScienceTool</h1> : <h1>ArtTool</h1>}
      <Navigation />
    </StyledWrapper>
  );
};

export default Header;
