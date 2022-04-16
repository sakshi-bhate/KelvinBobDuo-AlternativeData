import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Features from './Features';
import FooterPage from './Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{backgroundImage: 'url(' + require('./assets/b2.jpg') + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>
        <Navbar className="navbar-dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" style={{font:'Lato', fontSize:'30px' }}>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'white'}}/>
            <Navbar.Collapse id="basic-navbar-nav" style={{color: 'white'}}>
              <Nav className="me-auto" style={{ display:'flex', justifyContent: 'flex-end',width: '70vw'}}>
                <Nav.Link href="#home" style={{font:'Lato', fontSize:'20px', paddingRight: '50px', paddingTop:'15px'}}>Home</Nav.Link>
                <Nav.Link href="#link" style={{font:'Lato', fontSize:'20px', paddingRight: '50px', paddingTop:'15px'}}>Blogs</Nav.Link>
                <Nav.Link href="#link" style={{font:'Lato', fontSize:'20px', paddingRight: '50px', paddingTop:'15px'}}>Contact Us</Nav.Link>
                <Button type="button" class="btn btn-outline-primary" style={{marginRight: '30px', marginTop:'15px', font:'Lato', fontSize:'20px',}}>Login</Button>
                <Button type="button" class="btn btn-outline-primary" style={{marginRight: '30px', marginTop:'15px', font:'Lato', fontSize:'20px',}}>Sign Up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <p className="Heading" style={{fontWeight:'lighter'}}>We are here to <p style={{fontWeight:'bold'}}>grow your business.</p></p>
      </div>
        
      
      </header>
      <div style={{backgroundImage: 'url(' + require('./assets/b1.jpg') + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',}}>
        <h1>About Us</h1>
          <div className="about"> 
            
            <p>Our agenda is to make a loan recommendation system based on alternative data credit scoring that will ease the process of lending for micro, small and medium sized business and contribute in improving their credit profile and business growth.</p>
          </div>
          <div className="features">
            <h1 style={{marginBottom:'4rem', marginTop:'5rem'}}>Our Features</h1>
            <Features/>
            <Button type="button" class="btn btn-outline-primary" style={{marginRight: '30px', marginTop:'4rem', font:'Lato', fontSize:'20px',backgroundColor:'#00FF00', borderColor:'#00FF00'}}>Get Personalized Loan Recommendation</Button>
          </div>
          <div className="articles">
            <h1 style={{marginBottom:'4rem', marginTop:'5rem'}}>Related Articles</h1>
          </div>
      </div>
      <div style={{backgroundColor:'#000C22',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '99vw',
      height: '100vh',}}>
      </div>
      {/* <img src={require('./assets/data integration.png') } className="Bg"/> */} 
      {/* <Footer/> */}
      <FooterPage/>
    </div>
  
  
    
  );
}

export default App;
