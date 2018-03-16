import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, InputGroupText } from 'reactstrap';
import { GraphQLClient, request } from 'graphql-request';
import FormComponent from './components/Form';
import FoodGallery from './components/FoodGallery';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      res: '',
      term: 'bars',
      foodPlaces: [],
    };
    this.sendCategory = this.sendCategory.bind(this);
    this.setTerm = this.setTerm.bind(this);
  }
  sendCategory = e => {
    e.preventDefault();
    axios
      .get(`search/${this.state.term}`)
      .then(res => this.setState({ foodPlaces: res.data }))
      .catch(err => console.log(err));
  };
  setTerm = e => {
    e.preventDefault();
    this.setState({ term: e.target.value });
  };
  async componentDidMount() {
    await axios
      .get('/search')
      .then(res => this.setState({ res: res.data.business }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <h1>Fewd</h1>
        <Button value="Greek" onClick={this.setTerm}>
          Greek
        </Button>
        <Button value="Barbecue" onClick={this.setTerm}>
          Barbecue
        </Button>
        <form onSubmit={this.sendCategory}>
          <input type="submit" onClick={this.sendCategory} value="Click for food" />
        </form>
        <FoodGallery {...this.state} />
        <FormComponent data={this.state.res} />
      </div>
    );
  }
}

export default App;
