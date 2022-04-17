import React from 'react';
import './../../assets/css/plugins.css';
function Testimonials(){
    return(
        <div id="testimonials" style={{backgroundColor:'#A9A9A9'}}>
  <div class="container">
    <div class="section-title text-center">
      <h2>What our clients say</h2>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="testimonial">
          <div class="testimonial-image"><img src={require("./../../assets/img/james.jpg").default} alt="website template image"/></div>
          <div class="testimonial-content">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
            <div class="testimonial-meta">- John Doe</div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="testimonial">
          <div class="testimonial-image"><img src={require("./../../assets/img/mike.jpg").default} alt="website template image"/></div>
          <div class="testimonial-content">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."</p>
            <div class="testimonial-meta">- Johnathan Doe</div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="testimonial">
          <div class="testimonial-image"><img src={require("./../../assets/img/james.jpg").default} alt="website template image"/></div>
          <div class="testimonial-content">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
            <div class="testimonial-meta">- John Doe</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}
export default Testimonials;