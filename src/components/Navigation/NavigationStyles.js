import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 380px;
  background-color: var(--light-color);
  z-index: 9999;
`;

const Logo = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  font-weight: normal;
  font-size: 40px;
  background-color: #cfa7a5;
  height: 54px;
`;

const NavList = styled.ul`
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  list-style: none;
  margin-bottom: 4rem;
`;

const NavItem = styled.li`
  border-radius: 24px;
  border: 1px solid #DEDCD9;
  width: 90.67px;
  height: 35px;
  line-height: 30px;
  text-align: center;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  
  &.active {
    background-color: #000;
    color: #fff;
  }

  &:hover {
    border: 1px solid #000;
    transition: border 0.3s ease-in-out;
  }
`;

const NavigationLink = styled(NavLink)`
  font-size: 16px;
  color: var(--dark-color);
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &.active {
    color: #fff;
  }
`;

const Span = styled.span`
  line-height: 22px;
  color: #b1b1b1;
  font-size: 16px;
  display: flex;
  margin-top: 1.5rem;
`;

const Skills = styled.button`
  background-color: red;
`;

export { Nav, Logo, NavList, NavItem, NavigationLink, Span, Skills };
