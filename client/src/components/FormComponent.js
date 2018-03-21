import React, { Component } from 'react';
import { Container, Row, Col, Form, Input } from 'reactstrap';
import axios from 'axios';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      terms: [],
      address: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(address) {
    this.setState({ address });
  }
  handleSubmit(e) {
    e.preventDefault();
    geocodeByAddress(this.state.address)
      .then(results => console.log(results[0]))
      // .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  }
  render() {
    const { sendCategory } = this.props;
    const inputProps = {
      value: this.state.address,
      onChange: this.handleChange,
    };
    return (
      <Container>
        <Form inline onSubmit={this.handleSubmit}>
          <PlacesAutocomplete inputProps={inputProps} />
          <Input className="btn btn-primary" type="submit" value="Click for food" />
        </Form>
      </Container>
    );
  }
}

export default FormComponent;
