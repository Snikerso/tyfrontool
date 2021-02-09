import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonAccount from 'modules/common/components/atoms/Buttons/ButtonAccount/ButtonAccount';

const StyledWrapper = styled.div`
  position: absolute;

  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    321.7deg,
    rgba(252, 252, 252, 0.8) 15.1%,
    rgba(247, 247, 247, 0.8) 84.43%
  );
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 3px #a6a4a4,
    3px 3px 11px rgba(255, 255, 255, 0.44), -2px -2px 24px #ffffff;
  width: 200px;

  top: 50px;
  right: 0px;

  > * {
    margin: 5px 0px;
  }
`;

const FetchAuth = ({ path }) => {
  fetch(`/auth/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'snikers', password: 'snikers' }),
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
    });
};

const handleLogin = (authDispatch) => {
  FetchAuth({ path: '/' });
  authDispatch({ type: 'LOGIN' });
  return;
};

const handleChange = (authDispatch) => {
  authDispatch({ type: 'CHANGE' });
  // window.location = '/';
  return;
};
const handleLogout = (authDispatch) => {
  authDispatch({ type: 'LOGOUT' });
  localStorage.setItem('token', '');
  // window.location = '/';
  return;
};

const AccountBar = ({ authState, authDispatch }) => {
  const [isOpen, setIsOpen] = useState(false);
  // onClick={() => setIsOpen(!isOpen)}
  return (
    <>
      <ButtonAccount onClick={() => setIsOpen(!isOpen)} text={'dsa'} />

      {isOpen && (
        <StyledWrapper>
          {authState.isAuth ? (
            authState.isKids ? (
              <>
                <NavLink to="/settings">Ustawienia</NavLink>
                <button onClick={() => handleChange(authDispatch)}>
                  To Adult
                </button>
                <button onClick={() => handleLogout(authDispatch)}>
                  logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/settings">Ustawienia</NavLink>
                <button onClick={() => handleChange(authDispatch)}>
                  To Kids
                </button>
                <button onClick={() => handleLogout(authDispatch)}>
                  logout
                </button>
              </>
            )
          ) : authState.isKids ? (
            <>
              <button onClick={() => handleChange(authDispatch)}>
                To Adult
              </button>
              <button onClick={() => handleLogin(authDispatch)}>
                login or register
              </button>
            </>
          ) : (
            <>
              <button onClick={() => handleChange(authDispatch)}>
                To Kids
              </button>
              <button onClick={() => handleLogin(authDispatch)}>
                login or register
              </button>
            </>
          )}
        </StyledWrapper>
      )}
    </>
  );
};

export default AccountBar;
