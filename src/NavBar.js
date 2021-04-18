import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  
} from 'reactstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar  light expand="md">
        <NavbarBrand className="brand" href="/"><img className="logo" src="assets/images/logo.png" height="30" width="41" alt="MO"/> M.Osama PortFolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
       
        <Collapse className="algn" isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <Link to="./AboutMe">
              <NavLink href="./components/">About Me</NavLink>
            </Link>
            <Link to="./ContactMe">
              <NavLink href="./componnents/">Contact Me</NavLink>
            </Link>
            <Link to="./MyProject">
              <NavLink href="./components/">My projects </NavLink>
            </Link>
          </Nav>
      
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;