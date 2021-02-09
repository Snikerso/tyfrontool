import styled, { css } from 'styled-components';

interface StyledFastPlayIconProps {
  active: boolean;
}
export const StyledButtonPlay = styled.div`
  position: relative;
  display: flex;
`;
export const StyledFastPlayIcon = styled.button<StyledFastPlayIconProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  outline: none;
  border: none;

  background: linear-gradient(321.7deg, #fcfcfc 15.1%, #f7f7f7 84.43%);
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 3px #a6a4a4,
    3px 3px 11px rgba(255, 255, 255, 0.44), -2px -2px 24px #ffffff;
  :hover {
    cursor: pointer;
  }
  svg {
    margin-left: 9px;
  }

  ${({ active }) =>
    active &&
    css`
      svg {
        transform: rotate(90deg);
        transition: transform 0.2s;
      }
    `}
`;
