import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.span`
  font-weight: 700;
  color: orange;
`;

export const BtnLogOut = styled.button`
  padding: 5px 15px;
  font-size: 18px;
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