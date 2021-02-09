import styled, { css } from 'styled-components';

interface StyledButtonProps {
  isOpen: boolean;
}

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 12px;
    font-family: nunito-semibold;
  }
`;

export const StyledButtonAdd = styled.button<StyledButtonProps>`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  outline: none;
  border: none;
  background: linear-gradient(321.7deg, #fcfcfc 15.1%, #f7f7f7 84.43%);
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 3px #a6a4a4,
    3px 3px 11px rgba(255, 255, 255, 0.44), -2px -2px 24px #ffffff;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  ${({ isOpen }) =>
    isOpen &&
    css`
      svg {
        transform: rotate(45deg);
        transition: transform 0.2s;
      }
    `}
`;
