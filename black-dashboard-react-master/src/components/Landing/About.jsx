import React from 'react';
import './../../assets/css/about.css';
import './../../assets/css/plugins.css';

function About(){
    return(
        <div id="about" style={{backgroundColor:'#000c22'}}>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6"><img src={require("./../../assets/img/landing-img.png").default} class="img-responsive" style={{background:'transparent',maxWidth:'100%',width:'auto'}} alt="website template image"/></div>
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <h2>About Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h3>Why Choose Us?</h3>
                  <div class="list-style">
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>Lorem ipsum dolor</li>
                        <li>Tempor incididunt</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Incididunt ut labore</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default About;