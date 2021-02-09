import React, { useContext } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';

import {
  ButtonGradient,
  ButtonGradientWithHead,
} from 'modules/common/components/atoms/Buttons/Buttons';
import SvgMatchingLetters from 'modules/kids/games/SvgMatchingLetters';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h2 {
    margin-bottom: 100px;
    font-size: 42px;
    font-family: 'nunito-regular';
  }
`;

const StyledWrapperKids = styled.div`
  display: flex;
`;
const StyledKid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 200px;
  height: 200px;
  :hover {
    cursor: pointer;
  }
`;
const HomeKidsPage = () => {
  const { authState } = useContext(AuthContext);
  if (authState.isAuth == true && authState.actualKid.length > 0) {
    return <Redirect to="games" />;
  } else if (authState.isAuth == true) {
    return (
      <StyledWrapper>
        <h2>Wybiesz dziecko</h2>
        <StyledWrapperKids>
          {authState.kids.map((item) => (
            <>
              <StyledKid>
                <h3>{item}</h3>
              </StyledKid>
            </>
          ))}
          <StyledKid>
            <h3>Dodaj członka załogi</h3>
          </StyledKid>
        </StyledWrapperKids>
      </StyledWrapper>
    );
  } else {
    return (
      <StyledWrapper>
        <h2>Wybierz gre</h2>
        <ButtonGradientWithHead text={'Dopasuj Literki'}>
          <ButtonGradient>
            <SvgMatchingLetters />
          </ButtonGradient>
        </ButtonGradientWithHead>
      </StyledWrapper>
    );
  }
};

export default HomeKidsPage;
