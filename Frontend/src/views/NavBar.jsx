import React,{useState,useEffect,Fragment} from 'react';
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
    const[auth,Setauth]=useState(false)
    useEffect(()=>{
      if(localStorage.getItem('token')!==null){
        Setauth(true);
      }
    },[]);
    const handleLogout=(e)=>{
      e.preventDefault();
      fetch('http://127.0.0.1:8000/api/users/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('http://localhost:3000/admin/landing-page');
      });
    }
    return(
        <Navbar id="navbar" className="navbar-dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Kelvin Bob</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" style={{fontSize:'0.9rem'}}>Home</Nav.Link>
                <Nav.Link href="#link" style={{fontSize:'0.9rem'}} >Blogs</Nav.Link>
                <Nav.Link href="#link" style={{fontSize:'0.9rem'}} >Contact Us</Nav.Link>
                {auth===true?(
                  <>
                  <Link to="Dashboard"><Button type="button" className="btn btn-outline-primary">dashboard</Button></Link>
                  <Button type="button" className="btn btn-outline-primary" onClick={handleLogout}>Logout</Button>
                  </>
                ):(
                  <>
                  <Link to="login"><Button type="button" className="btn btn-outline-primary" >Login</Button></Link>
                  <Link to="register"><Button type="button" className="btn btn-outline-primary" >Sign Up</Button></Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default NavBar;