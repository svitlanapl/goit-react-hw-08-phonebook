import styled from 'styled-components';

export const RegistForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 320px;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const RegisterLabel = styled.label`
  text-align: left;
  font-weight: 500;
  font-size: 24px;
  color: red;
  /* text-shadow: var(--main-shadow); */
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const RegisterInput = styled.input`
  padding: 5px 10px;
  width: 100%;
  font-size: 24px;
  color: red;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  /* box-shadow: var(--inset-shadow); */
`;

export const RegisterButton = styled.button`
  padding: 10px 25px;
  font-size: 24px;
  font-weight: 500;
  color: red;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid orange;
  /* box-shadow: var(--main-shadow); */
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: orange;
    background-color: teal;
  }
`;



