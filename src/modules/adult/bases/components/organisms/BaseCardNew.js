import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as ButtonInitAddBase } from 'assets/interface/add.svg';
import FormNewBase from 'modules/common/components/organisms/forms/FormNewBase';

const StyledWrapperBaseCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const StyledActionTopButtons = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  height: 60px;
  > * {
    margin: 10px;
  }
`;

const StyledBaseCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    321.7deg,
    rgba(252, 252, 252, 0.8) 15.1%,
    rgba(247, 247, 247, 0.8) 84.43%
  );
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 3px #a6a4a4,
    3px 3px 11px rgba(255, 255, 255, 0.44), -2px -2px 24px #ffffff;
  border-radius: 15px;
  width: 300px;
  height: 80px;
  padding: 20px;
  ${({ isAdding }) =>
    isAdding &&
    css`
      height: 300px;
    `}
  p {
    font-size: 15px;
    font-family: nunito-semibold;
  }

  svg {
    width: 100px;
    height: 100px;
    :hover {
      cursor: pointer;
    }
  }
`;

const BaseCardNew = ({ game, item, community }) => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <>
      <StyledWrapperBaseCard isAdding={isAdding}>
        {isAdding && (
          <StyledActionTopButtons>
            <button onClick={() => setIsAdding((prev) => !prev)}>wyjdz</button>
          </StyledActionTopButtons>
        )}

        <StyledBaseCard isAdding={isAdding}>
          {isAdding ? (
            <FormNewBase />
          ) : (
            <>
              <ButtonInitAddBase onClick={() => setIsAdding((prev) => !prev)} />
              <p>Stwórz nową bazę</p>
            </>
          )}
        </StyledBaseCard>
      </StyledWrapperBaseCard>
    </>
  );
};

export default BaseCardNew;
