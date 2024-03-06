// src/components/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
width: 284px;
height: 1040px;
flex-shrink: 0;
background: var(--side-panel-gradient, linear-gradient(180deg, #402353 0%, #8F4EB9 100%)); /* Example: Change navbar background */
transition: 0.3s;   
color: #EBE8FF;
text-align: center;
font-family: Cabin;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

const NavToggle = styled.button`
  position: absolute;
  left: ${(props) => (props.isOpen ? '250px' : '0')};
  transition: 0.3s;
`;

const NavLink = styled(Link)`
display: block;
color: #EBE8FF;
padding: 16px;
text-decoration: none;

&:hover {
  border-radius: 24px;
  border: 1px solid #EBE8FF;
  background: #EBE8FF;

  /* tab shadow */
  box-shadow: 0px 2px 4px 0px rgba(64, 35, 83, 0.15);
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavToggle onClick={() => setIsOpen(!isOpen)}>{isOpen ? '<' : '>'}</NavToggle>
      <Nav isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recent">Recent</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </Nav>
    </>
  );
}

export default Navbar;
