import React,{useState} from 'react';
import NavBar from './NavBar';
import About from 'components/Landing/About';
import Features from 'components/Landing/Features';
import Testimonials from 'components/Landing/Testimonials';

import Container from 'react-bootstrap/Container';
import 'assets/css/LandingPage.css';


function LandingPage(){
    return(
        <div>
        <div className = "head-text">
            <div className = "head-image">
            <img src={require("assets/img/b2.jpg").default} style={{width:'100vw',height:'100vh'}} className="Bg1"/>
                <NavBar className="Navigationn-bar"/>
            </div> 
            <div className='text-on-image'>
                <p className="Heading" style={{fontWeight:'700'}} >We are here to grow your business.</p>
            </div>
        </div>
        <div style={{position:'absolute',top:'34rem',width:'100vw'}}>
        <About />
        <Features/>
        <Testimonials/>

        </div>
        {/* <img src={require("assets/img/landing-img.png").default} style={{marginTop:'-1rem',marginLeft:'12rem'}}/>  */}
        </div>
    );

}

export default LandingPage;