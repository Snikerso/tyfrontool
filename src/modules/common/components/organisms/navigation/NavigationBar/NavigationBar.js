import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as NavBar } from 'assets/interface/hamburger_bar.svg';

const StyledNavBar = styled(NavBar)`
  position: absolute;
  right: 5%;
  @media only screen and (min-width: ${({ theme }) => theme.media1000}) {
    display: none;
  }
`;
const StyledWrapper = styled.nav`
  position: absolute;
  right: 0;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  border-radius: 30px;
  font-family: nunito-regular;
  color: ${({ theme }) => theme.black};
  z-index: 100;
  background: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px #ffffff,
    2px 2px 6px rgba(132, 132, 132, 0.1), 8px 8px 30px rgba(132, 132, 132, 0.4);
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
  }

  > * {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
const LoginButton = styled.p`
  background: linear-gradient(
    119.9deg,
    rgba(122, 251, 237, 0) -31.09%,
    #78ffef 1.27%,
    #d63cae 117.77%,
    rgba(154, 100, 199, 0) 145.24%,
    #5891e3 145.25%
  );
  font-weight: bold;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  :hover {
    cursor: pointer;
  }
`;

const NavigationBar = ({ authState, authDispatch }) => {
  const [isOpenNavigationBar, setIsOpenNavigationBar] = useState(false);
  return (
    <>
      <StyledNavBar onClick={() => setIsOpenNavigationBar((prev) => !prev)} />
      {isOpenNavigationBar && (
        <StyledWrapper>
          {authState.isAuth ? (
            <>
              {authState.isKids ? (
                <>
                  <NavLink to="/games">GRY</NavLink>
                  <NavLink to="/kids-cocpit">DZIECI</NavLink>

                  <button>DarkMode</button>
                  <button onClick={() => authDispatch({ type: 'CHANGE' })}>
                    ADULT
                  </button>
                  <button onClick={() => authDispatch({ type: 'LOGOUT' })}>
                    Wyloguj się
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/community">Community</NavLink>
                  <NavLink to="/games">games</NavLink>
                  <NavLink to="/base">Base</NavLink>
                  <button>DarkMode</button>
                  <p>Ustawienia</p>
                  <button onClick={() => authDispatch({ type: 'CHANGE' })}>
                    Kids
                  </button>
                  <button onClick={() => authDispatch({ type: 'LOGOUT' })}>
                    Wyloguj się
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              {authState.isKids ? (
                <>
                  <NavLink to="/games">games</NavLink>
                  <button onClick={() => authDispatch({ type: 'CHANGE' })}>
                    Adult
                  </button>
                  <button onClick={() => authDispatch({ type: 'LOGIN' })}>
                    Zaloguj się
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/games">GRY</NavLink>
                  <NavLink to="/base">BAZY</NavLink>
                  <LoginButton onClick={() => authDispatch({ type: 'CHANGE' })}>
                    KIDS
                  </LoginButton>
                  <LoginButton onClick={() => authDispatch({ type: 'LOGIN' })}>
                    ZALOGUJ SIĘ
                  </LoginButton>
                </>
              )}
            </>
          )}
        </StyledWrapper>
      )}
    </>
  );
};

export default NavigationBar;
