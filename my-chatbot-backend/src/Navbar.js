// src/components/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: ${(props) => (props.isOpen ? '250px' : '0')};
  position: fixed;
  height: 100vh;
  background-color: #333;
  transition: 0.3s;
`;

const NavToggle = styled.button`
  position: absolute;
  left: ${(props) => (props.isOpen ? '250px' : '0')};
  transition: 0.3s;
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
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
      </Nav>
    </>
  );
}

export default Navbar;
