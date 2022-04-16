import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Features(){
    return (
            <Container fluid>
            <Row>
                <Col>
                  <Card style={{ width: '25rem', background:'transparent' }}>
                    <Card.Img variant="top" src={require('./assets/data integration.png') } style={{width:'5rem',height:'5rem', alignSelf:'center'}} />
                    <Card.Body>
                      <Card.Title style={{color:'white'}}>Data Integration</Card.Title>
                      <Card.Text style={{color:'#A8A8A8'}}>
                       We collect alternative data from third party sources without requiring any extra efforts from our customers, using Open APIs.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '25rem', background:'transparent' }}>
                    <Card.Img variant="top" src={require('./assets/data analysis.png') } style={{width:'5rem',height:'5rem', alignSelf:'center'}} />
                    <Card.Body>
                      <Card.Title style={{color:'white'}}>Continuous Data Analysis</Card.Title>
                      <Card.Text style={{color:'#A8A8A8'}}>
                       User's data is continuously analyzed to provide regular updates about how they could improve their Credit Score for benefit in future.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '25rem', background:'transparent' }}>
                    <Card.Img variant="top" src={require('./assets/recommendation.png') } style={{width:'5rem',height:'5rem', alignSelf:'center'}} />
                    <Card.Body>
                      <Card.Title style={{color:'white'}}>Personalized Loan Recommendation</Card.Title>
                      <Card.Text style={{color:'#A8A8A8',}}>
                       Loan Applicants are suggested the best suitable loan policies for them based on their credit score and business status.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
            </Container>
    );
}

export default Features;