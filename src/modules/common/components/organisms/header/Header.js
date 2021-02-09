import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Navigation from 'modules/common/components/organisms/navigation/Navigation/Navigation';
import FormRelayAddNew from 'modules/common/components/organisms/forms/FormRelayAddNew';
import FastPlay from 'modules/common/components/molecules/FastPlay/FastPlay';
import NavigationBar from 'modules/common/components/organisms/navigation/NavigationBar/NavigationBar';

const StyledWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100px;
  box-shadow: 0px -4px 4px #ffffff, 0px 4px 4px rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.white};
  h1 {
    font-family: virgo;
  }
  z-index: 10;
`;
const StyledActionButtons = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;

  > div {
    margin: 17px;
  }
`;
const StyledLogoWithHead = styled.div`
  position: fixed;
  /* top: 0; */
  margin-left: 30px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  a h1 {
    margin-left: 10px;
    font-size: 25px;
    letter-spacing: 3px;
    font-family: virgo;
    opacity: 90%;
    color: ${({ theme }) => theme.black};
  }
  a span {
    color: ${({ theme }) => theme.thourth};
    right: 0px;
    bottom: -10px;
    transform: rotate(10deg);
    font-size: 1.6rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.media700}) {
    margin-left: 30px;
    h1 {
      display: none;
    }
  }
`;

const Header = ({ authState, authDispatch }) => {
  return (
    <StyledWrapper>
      <StyledLogoWithHead>
        <NavLink to="/">
          <h1>Wordkito{authState.isKids && <span>Kids</span>}</h1>
        </NavLink>
      </StyledLogoWithHead>
      {authState.isAuth ? (
        <>
          {authState.isKids ? null : (
            <>
              <StyledActionButtons>
                <FastPlay />
                <FormRelayAddNew disabled={authState.isAuth} />
              </StyledActionButtons>
            </>
          )}
          <NavigationBar authState={authState} authDispatch={authDispatch} />
          <Navigation authState={authState} authDispatch={authDispatch} />
        </>
      ) : (
        <>
          {authState.isKids ? null : (
            <>
              <StyledActionButtons>
                <FastPlay />
                <FormRelayAddNew disabled={authState.isAuth} />
              </StyledActionButtons>
            </>
          )}
          <NavigationBar authState={authState} authDispatch={authDispatch} />
          <Navigation authState={authState} authDispatch={authDispatch} />
        </>
      )}
    </StyledWrapper>
  );
};
export default Header;
