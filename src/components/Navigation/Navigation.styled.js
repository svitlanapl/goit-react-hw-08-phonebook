import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  font-weight: 500;
  font-size: 26px;
  color: var(--primary);
  text-shadow: var(--main-shadow);
`;

export const NavItemLink = styled(NavLink)`
  color: currentColor;
  text-decoration: none;
  transition: all 250ms ease-in-out;
  &.active {
    color: var(--accent);
  }
  :hover,
  :focus {
    color: var(--accent);
  }
`;

export const LogForm = styled.form`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
`;
// .link.active {
//   color: #e84a5f;
// }