import styled from 'styled-components';

export const LogForm = styled.form`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  text-align: left;
  font-weight: 500;
  font-size: 24px;
  color: red;
  /* text-shadow: var(--main-shadow); */
`;

export const LoginInput = styled.input`
  padding: 5px 10px;
  width: 100%;
  font-size: 24px;
  color: red;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  /* box-shadow: var(--inset-shadow); */
`;

export const LoginButton = styled.button`
  padding: 10px 25px;
  font-size: 24px;
  font-weight: 500;
  color: orange;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid orange;
  /* box-shadow: var(--main-shadow); */
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: red;
    background-color: orange;
  }
`;