import React from 'react';
import './../../assets/css/about.css';
import './../../assets/css/plugins.css';

function About(){
    return(
        <div id="about" style={{backgroundColor:'#000c22'}}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6"><img src={require("./../../assets/img/landing-img.png").default} className="img-responsive" style={{background:'transparent',maxWidth:'100%',width:'auto'}} alt="website template image"/></div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>About Us</h2>
                  <p>Our agenda is to build an alternative-data-credit scoring system that would make it possible for MSMEs with low credit score to avail loan opportunities which will contribute in improving their credit profile and business growth.</p>
                  <h3>Why Choose Us?</h3>
                  <div className="list-style">
                    <div className="col-lg-8 col-sm-6 col-xs-12">
                      <ul>
                        <li>No Documents Required</li>
                        <li>Quick and seamless application process</li>
                        <li>Get Personalized loan recommendation</li>
                        <li>Become eligible for AmEx credit card</li>
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