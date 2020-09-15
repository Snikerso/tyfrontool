import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ToolContext } from 'contexts/ToolContext';

const StyledWrapper = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
`;
const StyledFunctionButton = styled.div`
  padding: 2px 4px;
  border: 1px solid black;
`;

const Navigation = () => {
  const { toolType, setToolType } = useContext(ToolContext);
  return (
    <StyledWrapper>
      <StyledFunctionButton>
        <NavLink to="/announcements">Ogłoszenia</NavLink>
      </StyledFunctionButton>

      <StyledFunctionButton>Forum Cogito</StyledFunctionButton>

      <StyledFunctionButton>Forum Cognition</StyledFunctionButton>
    </StyledWrapper>
  );
};

export default Navigation;
