import React from 'react';
import styled from 'styled-components';
import { Jumbotron } from 'reactstrap';
import Categories from './Categories';
import FoodGallery from './FoodGallery';
import FormComponent from './FormComponent';
import background from '../landing.jpg';

const style = {
  // backgroundImage: `url(${landing})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  height: '600px',
  width: 'auto',
};

const Fewd = (props) => {
  if (props.foodPlaces.length > 0) {
    return (
      <div>
        <Jumbotron style={style}>
          <h1>Fewd</h1>
          <small>Don't think. Just eat.</small>
          <FormComponent sendCategory={props.sendCategory} />
          <FoodGallery foodPlaces={props.foodPlaces} />
        </Jumbotron>
      </div>
    );
  }
  return (
    <div>
      <Jumbotron style={style}>
        <h1>Fewd</h1>
        <small>Don't think. Just eat.</small>
        <FormComponent sendCategory={props.sendCategory} />
      </Jumbotron>
    </div>
  );
};

export default Fewd;
