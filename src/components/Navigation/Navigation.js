import React from 'react';
import { Nav, Logo, NavList, NavItem, NavigationLink, Span } from './NavigationStyles';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const handleLinkClick = (e) => {
    e.preventDefault();

    const tl = gsap.timeline();

    tl.to(e.target, {
      duration: 0.2,
      opacity: 0.5,
      y: -10,
    }).to(e.target, {
      duration: 0.2,
      opacity: 1,
      y: 0,
    });

    setTimeout(() => {
      window.location = e.target.href;
    }, 400);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Nav>
      <Logo>Marcin Plaza<Span>2019-2023</Span></Logo>
      <NavList>
      <NavItem className={isActive('/')}>
          <NavigationLink to="/" onClick={handleLinkClick}>
            Works
          </NavigationLink>
        </NavItem>
        <NavItem className={isActive('/about')}>
          <NavigationLink to="/about" onClick={handleLinkClick}>
            About
          </NavigationLink>
        </NavItem>
        <NavItem className={isActive('/contact')}>
          <NavigationLink to="/contact" onClick={handleLinkClick}>
            Contact
          </NavigationLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
