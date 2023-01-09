import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './public/LiamBTwomeyLogo_1.jpg';
import Contact from "../Pages/Contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from '../Pages/home.js';
import { Link, useLocation } from 'react-router-dom';


class Header extends Component {
  render() {
  return (
<div>
  <div>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand style={{fontFamily: 'Impact', fontSize: 'xx-large'}} href="#home"><i>Liam B. Twomey</i></Navbar.Brand>
           <Nav className="me-auto">
            <Nav.Link className="pb-0" style={{color: 'white', marginBottom: "0px"}} disabled>ReactJS Developer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="black" variant="dark" style={{alignItems: 'start'}}>
        <Container style={{flexDirection: 'column', alignItems: 'start'}}>
            <Nav.Link style={{color: 'white', fontSize: 'xx-small'}} href="#h">EMAIL</Nav.Link>
            <Nav.Link style={{color: 'white', fontSize: 'xx-small'}} href="#features">GITHUB</Nav.Link>
            <Nav.Link as={Link} eventKey="/contact" style={{color: 'white', fontSize: 'xx-small'}} to='/contact'>CONTACT</Nav.Link>
  
        </Container>
      </Navbar>
      <Navbar bg="black" variant="dark" style={{padding: '0px'}}>
        <Container className="justify-content-start" style={{padding: '10px'}}>
            <Nav.Link className="pb-0" as={Link} eventKey="/" style={{color: 'white', padding: '10px'}} to='/'>Home</Nav.Link>
            <Nav.Link className="pb-0" as={Link} style={{color: 'white', padding: '10px'}} to='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link className="pb-0" as={Link} style={{color: 'white', padding: '10px'}} to='/tools'>Tools</Nav.Link>
            <Nav.Link  className="pb-0" as={Link} eventKey="/contact" style={{color: 'white', padding: '10px'}} to='/contact'>Contact</Nav.Link>
  
        </Container>
      </Navbar>
    </div>
    
      </div> 
  );
}} 
export default Header;