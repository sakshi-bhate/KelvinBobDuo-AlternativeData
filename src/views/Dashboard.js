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
import React,{useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
import chart1 from "variables/chart1";
import axios from 'axios'

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
   chartExample7,
} from "variables/charts.js";

const url="http://127.0.0.1:8000/api/users/trial"
function Dashboard(props) {

    const fetchdata = async ()=>{
      const response=await axios.get(url)
      console.log(response)
    }
    useEffect(()=>{
      fetchdata()
    },[])
    
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12"style={{maxWidth:'80%'}} >
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h2">Score Performance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Traditional Credit Score
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Alternative Data Score
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" style={{maxWidth:'20%'}}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Score</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 646.42
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Doughnut
                    data={chartExample7.data}
                    options={chartExample7.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4" style={{maxWidth:'25%'}}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Sales Points</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 100%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" style={{maxWidth:'25%'}}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Essential Bill Payments Score</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  91.6%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" style={{maxWidth:'25%'}}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Debt to Asset Ratio</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 100%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" style={{maxWidth:'25%'}}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Default Payments Score</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-cart" style={{color:'#E4D00A'}} /> 100%
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample5.data}
                    options={chartExample5.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" style={{maxWidth:'25%'}}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Sentimental Analysis</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 44.6%
                </CardTitle>
              </CardHeader>
              <CardBody>
                 <Bar
                    data={chartExample6.data}
                    options={chartExample6.options}
                  />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" style={{maxWidth:'100%'}}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Credit Card Status</h5>
                <CardTitle tag="h3">
                 Eligible for Amex Credit Card
                </CardTitle>
              </CardHeader>
              <CardBody style={{display:'flex',justifyContent:'center'}}>
                  <i className="tim-icons icon-check-2" style={{color:'green',fontSize:'8rem'}} /> 
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Policies For You</h6>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <p className="title">Policy 1</p>
                          <p className="text-muted">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="title">Policy 2</p>
                          <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="title">Policy 3</p>
                          <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="title">Policy 4</p>
                          <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>

          
          
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
