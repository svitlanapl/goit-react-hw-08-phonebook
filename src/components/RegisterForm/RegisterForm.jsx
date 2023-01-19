import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from '@mui/material/Button';

import {
    RegistForm,
    RegisterWrapper,
    RegisterLabel,
    RegisterInput,
    RegisterButton
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
      <RegistForm
          onSubmit={handleSubmit}
          autoComplete="off">
          <RegisterWrapper>
              <RegisterLabel htmlFor='username'>
                  Username
                  <RegisterInput
                      type="text"
                      name="username"
                      id='username'
                  />
              </RegisterLabel>
          </RegisterWrapper>

          <RegisterWrapper>
              <RegisterLabel htmlFor='email'>
                  Email
                  <RegisterInput
                      type="email"
                      name="email"
                      id='email'
                  />
              </RegisterLabel>
          </RegisterWrapper>

          <RegisterWrapper>
              <RegisterLabel htmlFor='password'>
                  Password
                  <RegisterInput
                      type="password"
                      name="password"
                      id='password'
                  />
              </RegisterLabel>
          </RegisterWrapper>
          <Button
              color="inherit"
              type="submit">
              Register
          </Button>
      </RegistForm>
  );
};
