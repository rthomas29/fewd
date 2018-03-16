import React, { Component } from 'react';
import axios from 'axios';
import FormComponent from './components/FormComponent';
import FoodGallery from './components/FoodGallery';
import Categories from './components/Categories';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
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
  render() {
    return (
      <div className="App">
        <h1>Fewd</h1>
        <Categories setTerm={this.setTerm} />
        <FormComponent sendCategory={this.sendCategory} />
        <FoodGallery {...this.state} />
      </div>
    );
  }
}
