import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../assets/css/LandingPage.css';
import '../assets/css/Login.css';
import Login from './login'
import {Link} from 'react-router-dom'


function NavBar(){
  

    return(
        <Navbar id="navbar" className="navbar-dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" style={{fontSize:'0.9rem'}}>Home</Nav.Link>
                <Nav.Link href="#link" style={{fontSize:'0.9rem'}} >Blogs</Nav.Link>
                <Nav.Link href="#link" style={{fontSize:'0.9rem'}} >Contact Us</Nav.Link>
                <Link to="login"><Button type="button" className="btn btn-outline-primary">Login</Button></Link>
                <Link to="register"><Button type="button" className="btn btn-outline-primary" >Sign Up</Button></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default NavBar;