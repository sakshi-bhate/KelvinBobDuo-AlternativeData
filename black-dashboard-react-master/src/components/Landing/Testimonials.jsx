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
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
            <div className="testimonial-meta">- John Doe</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial">
          <div className="testimonial-image"><img src={require("./../../assets/img/mike.jpg").default} alt="website template image"/></div>
          <div className="testimonial-content">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."</p>
            <div className="testimonial-meta">- Johnathan Doe</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial">
          <div className="testimonial-image"><img src={require("./../../assets/img/james.jpg").default} alt="website template image"/></div>
          <div className="testimonial-content">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
            <div className="testimonial-meta">- John Doe</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}
export default Testimonials;