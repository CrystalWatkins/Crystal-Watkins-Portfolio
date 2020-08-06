import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";


const NavbarPage = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">Crystal's Portfolio
        <img
        src="https://raw.githubusercontent.com/CrystalWatkins/Crystal-Watkins-Portfolio/master/public/favicon.ico"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Crystal logo"
        rounded="true"
      />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./About">About</Nav.Link>
            <Nav.Link href="./Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="./Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavbarPage;