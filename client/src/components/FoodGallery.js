import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const FoodGallery = (props) => {
  const { foodPlaces } = props;

  return (
    <ListGroup>
      {foodPlaces.map(place => (
        <ListGroupItem>
          <h2>{place.name}</h2>
          <h3>{place.phone}</h3>
          <h3>{place.url}</h3>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default FoodGallery;
