import React from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const FoodGallery = (props) => {
  const { foodPlaces } = props;

  return (
    <Container>
      {foodPlaces.map(place => (
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>
                  <a href={place.url}>{place.name}</a>
                </CardTitle>
                <CardText>{place.phone}</CardText>
                <CardText>{place.price}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FoodGallery;
