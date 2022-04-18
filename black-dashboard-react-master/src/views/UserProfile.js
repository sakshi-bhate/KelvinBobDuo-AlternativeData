/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useState} from "react";
import * as  yup from 'yup';
import axios from 'axios';
import {Formik} from 'formik';
import {Link} from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const BaseURL="http://127.0.0.1:8000/api/users/add/";
const re = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const pan=/^([a-zA-Z]([a-zA-Z]([a-zA-Z]([a-zA-Z]([a-zA-Z]([0-9]([0-9]([0-9]([0-9]([a-zA-Z])?)?)?)?)?)?)?)?)?)?$/;
const ivrs=/^[N]{1}[0-9]{10}$/;
const gst=/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
const upi=/^[\w.-]+@[\w.-]+$/;
const NewValidationSchema=yup.object().shape({
    // // website:yup.string().matches(re,'URL is not valid'),
    // phone_no: yup.string().required().label("phone_no").matches(phoneRegExp, 'Phone number is not valid'),
    // pan_no: yup.string().required().label("pan_no").matches(pan, 'Pan number is not valid'),
    // udhyog_id: yup.number().required().label("udhyog_id").typeError('Must be a number').min(12, 'Must be exactly 12 digits').max(12, 'Must be exactly 12 digits'),
    // aadhar_no:yup.number().required().label("aadhar_no").min(12, 'Must be exactly 12 digits').max(12, 'Must be exactly 12 digits'),
    // ivrs_no:yup.string().required().label("ivrs_no").matches(ivrs, 'IVRS number is not valid'),
    // gst_no:yup.string().required().label("gst_no").matches(gst, 'GST number is not valid'),
    // upi_id:yup.string().required().label("upi_id").matches(upi, 'UPI Id is not valid'),
    // zip_code:yup.number().label("zip_code").min(6, 'Must be exactly 6 digits').max(6, 'Must be exactly 6 digits'),
})


const HandlePost=(values)=>{
  axios.post('http://127.0.0.1:8000/api/users/add/',values).then(res=>{
    if(res.status===200){
      console.log("done")
      window.location.replace('http://localhost:3000/admin/dashboard');
    }else{
      Promise.reject()
    }
  }).catch((err)=>alert("something went wrong"))
}

function UserProfile() {
  const[data,Setdata]=useState([])
  return (<Formik validateOnChange isValidating initialValues={{phone_no:"",udhyog_id:"",pan_no:"",aadhar_no:"",gst_no:"",ivrs_no:"",upi_id:""}} validationSchema={NewValidationSchema} enableReinitialize onSubmit={HandlePost}>
        {({handleChange,handleSubmit,errors,touched,setFieldTouched})=>(
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    {/* <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label htmlFor='company' >Company*</label>
                        <Input
                          placeholder="Company"
                          type="text"
                          onChange={handleChange("company")} onBlur={()=>setFieldTouched("company")}
                        />
                      </FormGroup>
                    </Col> */}
                    {/* <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label htmlFor='owner'>Owned By</label>
                        <Input
                          placeholder="Your name"
                          type="text"
                          onChange={handleChange("owner")} onBlur={()=>setFieldTouched("owner")}
                        />
                      </FormGroup>
                    </Col> */}
                    {/* <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="website">
                          Website
                        </label>
                        <Input placeholder="Website URL" type="url" 
                        onChange={handleChange("website")} onBlur={()=>setFieldTouched("website")}
                        />
                      </FormGroup>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="phone_no">Phone Number*</label>
                        <Input
                          placeholder="Registered Contact Number"
                          type="text"
                          onChange={handleChange("phone_no")} onBlur={()=>setFieldTouched("phone_no")}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="udhyog_id">Udhyog ID*</label>
                        <Input
                          placeholder="MSME Registration ID"
                          type="text"
                          onChange={handleChange("udhyog_id")} onBlur={()=>setFieldTouched("udhyog_id")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                   <Row>
                    {/* <Col md="12">
                      <FormGroup>
                        <label htmlFor='address'>Address</label>
                        <Input
                          placeholder="Office Address"
                          type="text"
                          onChange={handleChange("address")} onBlur={()=>setFieldTouched("address")}
                        />
                      </FormGroup>
                    </Col> */}
                  </Row>
                  <Row>
                    {/* <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label htmlFor='city'>City</label>
                        <Input
                          placeholder="City"
                          type="text"
                          onChange={handleChange("city")} onBlur={()=>setFieldTouched("city")}
                        />
                      </FormGroup>
                    </Col> */}
                    {/* <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label htmlFor='country'>Country</label>
                        <Input
                          placeholder="Country"
                          type="text"
                          onChange={handleChange("country")} onBlur={()=>setFieldTouched("country")}
                        />
                      </FormGroup>
                    </Col> */}
                    {/* <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor='zip_code'>Postal Code</label>
                        <Input placeholder="ZIP Code"  
                        type="text"
                        onChange={handleChange("zip_code")} onBlur={()=>setFieldTouched("zip_code")}
                        />
                      </FormGroup>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label htmlFor='pan_no'>Pan Number*</label>
                        <Input
                          placeholder="Pan Number"
                          type="text"
                          onChange={handleChange("pan_no")} onBlur={()=>setFieldTouched("pan_no")}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label htmlFor='aadhar_no'>Aadhaar Number*</label>
                        <Input
                          placeholder="Aadhaar Number"
                          type="text"
                          onChange={handleChange("aadhar_no")} onBlur={()=>setFieldTouched("aadhar_no")}                          
                        />
                      </FormGroup>
                    </Col>
                  <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor='gst_no'>GST Number*</label>
                        <Input placeholder="GST Number" type="text" 
                        onChange={handleChange("gst_no")} onBlur={()=>setFieldTouched("gst_no")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="ivrs_no">IVRS Number*</label>
                        <Input
                          placeholder="IVRS Number"
                          type="text"
                          onChange={handleChange("ivrs_no")} onBlur={()=>setFieldTouched("ivrs_no")}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="upi_id">UPI ID*</label>
                        <Input
                          placeholder="UPI ID"
                          type="text"
                          onChange={handleChange("upi_id")} onBlur={()=>setFieldTouched("upi_id")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  
                </Form>
              </CardBody>
              <CardFooter>
                {/* <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button> */}
              <Button className="btn-fill" color="primary" type="submit" onClick={handleSubmit}>
                  Calculate Score
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg").default}
                    />
                    <h5 className="title">Kiara Kapoor</h5>
                  </a>
                  <p className="description">Ceo/Co-Founder</p>
                </div>
                <div className="card-description">
                  Textile Company
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )}
  </Formik>
  );
}

export default UserProfile;
