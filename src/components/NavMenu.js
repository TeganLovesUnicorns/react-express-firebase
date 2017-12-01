import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <div className="nav-menu">
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Eclipse Lighting Solutions</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer exact={true} to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer exact={true} to="/about">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
          <LinkContainer exact={true} to="/contact">
            <NavItem eventKey={3}>Contact</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavMenu;
