import React from 'react';
import './../../assets/css/plugins.css';
function Testimonials(){
    return(
        <div id="testimonials" style={{backgroundColor:'#A9A9A9'}}>
  <div className="container">
    <div className="section-title text-center">
      <h2>What our clients say</h2>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="testimonial">
          <div className="testimonial-image"><img src={require("./../../assets/img/james.jpg").default} alt="website template image"/></div>
          <div className="testimonial-content">
            <p>"Thanks to alternative credit scoring system, I was able to get loan to purchase equipments required for my store."</p>
            <div className="testimonial-meta">- John Doe</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial">
          <div className="testimonial-image"><img src={require("./../../assets/img/mike.jpg").default} alt="website template image"/></div>
          <div className="testimonial-content">
            <p>"Best credit score calculating experience with minimal information need and less time consuming"</p>
            <div className="testimonial-meta">- Johnathan Doe</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial">
          <div className="testimonial-image"><img src={require("./../../assets/img/james.jpg").default} alt="website template image"/></div>
          <div className="testimonial-content">
            <p>"Really smooth and efficient score calculating process."</p>
            <div className="testimonial-meta">- Alex Warn</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}
export default Testimonials;