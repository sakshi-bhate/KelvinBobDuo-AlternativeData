import React from 'react';
// import './../../assets/css/bootstrap.css';
import './../../assets/css/about.css';
import './../../assets/css/plugins.css';
import 'font-awesome/css/font-awesome.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
function Contact(){
    return (
        <div id="contact">
  <div className="container">
    <div className="col-md-8"  style={{float:'left',width:'66.66666667%'}}>
      <div className="row">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
        </div>
        <form action="#" method="post" name="sentMessage" id="contactForm" novalidate>
          <div className="row">
            <div className="col-md-6"  style={{float:'left',width:'50%'}}>
              <div className="form-group">
                <input type="text" id="name" className="form-control" placeholder="Name" required/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6" style={{float:'left',width:'50%'}}>
              <div className="form-group">
                <input type="email" id="email" className="form-control" placeholder="Email" required/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div id="success"></div>
          <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
        </form>
      </div>
    </div>
    <div className="col-md-3 col-md-offset-1 contact-info" style={{float:'left',width:'25%',marginLeft: '8.33333333%'}}>
      <div className="contact-item">
        <h3>Contact Info</h3>
        <p><span><i className="fa fa-map-marker"></i> Address</span>4321 California St,<br/>
          San Francisco, CA 12345</p>
      </div>
      <div className="contact-item">
        <p><span><i className="fa fa-phone"></i> Phone</span> +1 123 456 1234</p>
      </div>
      <div className="contact-item">
        <p><span><i className="fa fa-envelope"></i> Email</span> info@company.com</p>
      </div>
    </div>
    <div className="col-md-12" style={{float:'left',width:'100%'}}>
      <div className="row">
        <div className="social">
          <ul>
            <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-google"></i></a></li>
            <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Contact;