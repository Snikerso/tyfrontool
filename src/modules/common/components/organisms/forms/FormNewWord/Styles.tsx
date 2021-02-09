import styled, { css } from 'styled-components';

interface StyledWrapperProps {
  readonly base: any;
}

interface StyledFormPageProps {
  readonly wordsPage: any;
}
export const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 300px;
  border: 2px solid black;
  height: 100%;

  background-color: ${({ theme }) => theme.white};

  ${({ base }) =>
    base &&
    css`
      position: absolute;
      top: 0px;
      left: 0px;
    `}
`;

export const StyledForm = styled.form<StyledFormPageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  ${({ wordsPage }) =>
    wordsPage &&
    css`
      flex-direction: row;
      justify-items: center;
      align-items: center;
    `}
`;
