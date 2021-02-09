import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AccountBar from 'modules/common/components/molecules/AccountBar/AccountBar';
import { LanguageContext } from 'contexts/LanguageContext';

const StyledWrapper = styled.nav`
  position: absolute;
  right: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: nunito-regular;
  color: ${({ theme }) => theme.black};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
  }
  @media only screen and (max-width: ${({ theme }) => theme.media1000}) {
    display: none;
  }

  > * {
    margin-right: 36px;
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

const Navigation = ({ authState, authDispatch }) => {
  const { languageState, languageDispatch } = useContext(LanguageContext);

  return (
    <StyledWrapper>
      {authState.isAuth ? (
        <>
          {authState.isKids ? (
            <>
              <NavLink to="/games">games</NavLink>
              <NavLink to="/games">Moje dzieci</NavLink>
              <AccountBar authState={authState} authDispatch={authDispatch} />
            </>
          ) : (
            <>
              <NavLink to="/community">
                {languageState.data.navigation.community}
              </NavLink>
              <NavLink to="/games">
                {languageState.data.navigation.games}
              </NavLink>
              <NavLink to="/base">
                {languageState.data.navigation.bases}
              </NavLink>
              <AccountBar authState={authState} authDispatch={authDispatch} />
              <select
                value={languageState.language}
                onChange={(e) => languageDispatch({ type: e.target.value })}
              >
                <option value={'ENG'}>english</option>
                <option value={'PL'}>Polski</option>
              </select>
            </>
          )}
        </>
      ) : (
        <>
          {authState.isKids ? (
            <>
              <NavLink to="/games">games</NavLink>
              <AccountBar authState={authState} authDispatch={authDispatch} />
            </>
          ) : (
            <>
              <NavLink to="/games">GRY</NavLink>
              <NavLink to="/base">BAZY</NavLink>
              <LoginButton onClick={() => authDispatch({ type: 'CHANGE' })}>
                KIDS
              </LoginButton>
              <LoginButton>
                <NavLink to={'/login'}>ZALOGUJ SIĘ</NavLink>
              </LoginButton>
            </>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

export default Navigation;
