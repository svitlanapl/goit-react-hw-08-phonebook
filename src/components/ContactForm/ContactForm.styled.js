import styled from 'styled-components';
import { Form, Field } from 'formik';

export const InputForm = styled(Form)`
  display: block;
  padding: 10px;
  justify-content: center;
  border: solid 1px #4f871a;
  border-radius: 5px;
  width: 500px;
`;

export const InputTitle = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: bold;
  
`;

export const Input = styled(Field)`
  margin-bottom: 10px;
  padding: 5px;
  border: solid 1px #4f871a;
  border-radius: 5px;
  font-size: 18px;
`; 

export const FormButton = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
  border: solid 1px #4f871a;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  background: #bae096;
  cursor: pointer;
`;

