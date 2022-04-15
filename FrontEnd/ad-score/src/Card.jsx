import React from 'react';
// import Card from 'react-bootstrap/Card';

function Card(){
    return(
        <Card>
          {/* <Card.Img variant="top" src={require('./assets/data integration.png') } /> */}
          <Card.Body>
            <Card.Title>Data Integration</Card.Title>
            <Card.Text>
             We collect alternative data from third party sources without requiring any extra efforts from our customers, using Open APIs.
            </Card.Text>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
    );
}

export default Card;