import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ToolContext } from 'contexts/ToolContext';

const StyledWrapper = styled.div`
  display: flex;
`;

const Navigation = () => {
  const { toolType, setToolType } = useContext(ToolContext);
  return (
    <StyledWrapper>
      <NavLink to="/announcements">Ogłoszenia</NavLink>
      <div>Forum Cogito</div>
      <div>Forum Cognition</div>
      {toolType === 'ART' && (
        <button onClick={() => setToolType('SCIENCE')}>ChangeTool</button>
      )}
      {toolType === 'SCIENCE' && (
        <button onClick={() => setToolType('ART')}>ChangeTool</button>
      )}
    </StyledWrapper>
  );
};

export default Navigation;
