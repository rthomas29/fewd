import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const FoodGallery = (props) => {
  const { foodPlaces } = props;

  return (
    <ListGroup>{foodPlaces.map(place => <ListGroupItem>{place.name}</ListGroupItem>)}</ListGroup>
  );
};

export default FoodGallery;
