import React, { useContext } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import Label from 'modules/common/components/atoms/texts/Labels/Labels';
import { InputText } from 'modules/common/components/atoms/inputs/InputsText/InputsText';

const StyledWrapperForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginPage = () => {
  const { authState, authDispatch } = useContext(AuthContext);
  const { register, handleSubmit, setError, errors } = useForm();

  const onSubmit = (data) => {
    fetch(`http://127.0.0.1:8000/registration/auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        authDispatch({ type: 'LOGIN', payload: { data: data } });
      })
      .catch((err) => console.log(err));
  };

  console.log('login page render');
  return (
    <>
      <h1>{'Login'}</h1>
      <StyledWrapperForm onSubmit={handleSubmit(onSubmit)}>
        <Label text={'Username'} />
        <InputText
          placeholder={'np: Jacek'}
          name="username"
          ref={register({ required: true })}
        />
        <Label text={'Hasło'} />
        <InputText
          placeholder={'np: *******'}
          name="password"
          ref={register({ required: true })}
        />

        <button>{'Zaloguj się'}</button>

        <p>Jeżeli nie masz konta:</p>
        <NavLink to="/register">{'Zarejestruj się'}</NavLink>
      </StyledWrapperForm>
    </>
  );
};

export default LoginPage;
