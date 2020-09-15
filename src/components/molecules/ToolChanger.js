import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
`;
const StyledWrapperToolChanger = styled.div`
  display: flex;
  position: absolute;
`;
const ButtonToolAvatar = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50% 50px 40px;
`;
const ButtonToolChanger = styled.button``;
const ToolChanger = ({ toolType, setToolType }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <ButtonToolAvatar onClick={() => setIsOpen(!isOpen)}>
        {toolType}
      </ButtonToolAvatar>
      {isOpen && (
        <>
          <StyledWrapperToolChanger>
            {toolType === 'ART' && (
              <ButtonToolChanger onClick={() => setToolType('SCIENCE')}>
                S
              </ButtonToolChanger>
            )}
            {toolType === 'SCIENCE' && (
              <ButtonToolChanger onClick={() => setToolType('ART')}>
                A
              </ButtonToolChanger>
            )}
          </StyledWrapperToolChanger>
        </>
      )}
    </StyledWrapper>
  );
};
export default ToolChanger;
