import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
    LogForm,
    LoginWrapper,
    LoginLabel,
    LoginInput,
    LoginButton
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
      
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
      
    form.reset();
  };

  return (
      <LogForm
          onSubmit={handleSubmit}
          autoComplete="off">
          <LoginWrapper>
              <LoginLabel htmlFor='email'>
                  Email
                  <LoginInput
                      type="email"
                      name="email"
                      id="email"
                  />
              </LoginLabel>
              <LoginLabel htmlFor='password'>
                  Password
                  <LoginInput
                      type="password"
                      name="password"
                      id='password'
                  />
              </LoginLabel>
          </LoginWrapper>
          <LoginButton
              type="submit">
              Log In
          </LoginButton>
      </LogForm>
  );
};
