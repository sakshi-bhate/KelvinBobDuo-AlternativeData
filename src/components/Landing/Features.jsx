import React from 'react';
import './../../assets/css/about.css';
import './../../assets/css/plugins.css';

function Features(){
    return(
        <div id="features" className="text-center" style={{backgroundColor:'#000c22',marginTop:'0',paddingBottom:'5rem'}}>
  <div className="container">
    <div className="col-md-10 col-md-offset-1 section-title">
      <h2>Features</h2>
    </div>
    <div className="row">
      <div className="col-xs-6 col-md-3"><i className="fa fa-laptop"></i>
        <h3>Data Integration</h3>
        <p>Collect alternative data from various sources</p>
      </div>
      <div className="col-xs-6 col-md-3"><i className="fa fa-calculator"></i>
        <h3>Data Analysis</h3>
        <p>Analyse data to predict alternative score for user based on various parameters</p>
      </div>
      <div className="col-xs-6 col-md-3"><i className="fa fa-money"></i>
        <h3>Credit Worthiness Assessment</h3>
        <p>Let the lenders know your credit worthiness based on alternative data as an add-on to traditional score</p>
      </div>
      <div className="col-xs-6 col-md-3"><i className="fa fa-magic"></i>
        <h3>Loan Policy Recommendation</h3>
        <p>Recommend most suitable policy for user based on their current requirement and credit worthiness</p>
      </div>
    </div>
  </div>
</div>
    );
}
export default Features;