import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return(
        <Navbar className="navbar-dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" style={{font:'Lato', fontSize:'30px' }}>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'white'}}/>
            <Navbar.Collapse id="basic-navbar-nav" style={{color: 'white'}}>
              <Nav className="me-auto" style={{ display:'flex', justifyContent: 'flex-end',width: '70vw'}}>
                <Nav.Link href="#home" style={{font:'Lato', fontSize:'20px', paddingRight: '50px', paddingTop:'15px'}}>Home</Nav.Link>
                <Nav.Link href="#link" style={{font:'Lato', fontSize:'20px', paddingRight: '50px', paddingTop:'15px'}}>Blogs</Nav.Link>
                <Nav.Link href="#link" style={{font:'Lato', fontSize:'20px', paddingRight: '50px', paddingTop:'15px'}}>Contact Us</Nav.Link>
                <Link to="/login"><Button type="button" class="btn btn-outline-primary" style={{marginRight: '30px', marginTop:'15px', font:'Lato', fontSize:'20px',}}>Login</Button></Link>
                <Button type="button" class="btn btn-outline-primary" style={{marginRight: '30px', marginTop:'15px', font:'Lato', fontSize:'20px',}}>Sign Up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}
export default NavBar