import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Features from './Features';

import NavBar from './NavBar'

const Hero=()=>{
    return(
        <div>
            <header className="App-header">
    <div style={{backgroundImage: 'url(' + require('./assets/b2.jpg') + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>
        <NavBar/>
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
    </div>
    )


}
export default Hero
