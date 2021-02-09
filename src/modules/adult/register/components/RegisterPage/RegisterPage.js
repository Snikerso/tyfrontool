import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Label from 'modules/common/components/atoms/texts/Labels/Labels';
import { InputText } from 'modules/common/components/atoms/inputs/InputsText/InputsText';
import { ButtonAction } from 'modules/common/components/atoms/Buttons/Buttons';

const StyledWrapperForm = styled.form`
  display: flex;
  flex-direction: column;

  > * {
    margin: 20px;
  }
`;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    errors,
  } = useForm();
  const password = useRef({});
  const [isError, setIsError] = useState(false);

  password.current = watch('password', '');

  const onSubmit = (data) => {
    fetch(`http://127.0.0.1:8000/registration/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return { data: res.json(), status: true };
        } else {
          return res.json();
        }
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>{'Zarejestruj się'}</h1>
      <StyledWrapperForm onSubmit={handleSubmit(onSubmit)}>
        <Label text={'Nick name'} />
        <InputText
          type="text"
          name="username"
          ref={register({ required: true })}
        />
        {/* <Label text={'E-mail'} />
        <InputText name="email" ref={register({ required: true })} /> */}
        <Label text={'Hasło'} />
        <InputText
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        <Label text={'Powtórz hasło'} />
        <InputText
          type="password"
          name="repeatpassword"
          ref={register({
            validate: (value) =>
              value === password.current || 'Haslo nie pasuje',
            required: true,
          })}
        />
        {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
        <ButtonAction text={'Zarejestruj się'} />
      </StyledWrapperForm>
    </>
  );
};

export default RegisterPage;
