import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 35px;
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.theme.white};
  border: 2px solid ${(props) => props.theme.primary};
  z-index: 1;
`;

function ModalMetaIcon({ type }) {
  console.log(type);
  switch (type) {
    case 'PAYMENT':
      return <StyledWrapper>PAYMENT</StyledWrapper>;
    case 'HELP':
      return <StyledWrapper>HELP</StyledWrapper>;
    case 'WORK':
      return <StyledWrapper>WORK</StyledWrapper>;
  }
}

export default ModalMetaIcon;
