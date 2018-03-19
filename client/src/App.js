import React, { Component } from 'react';
import axios from 'axios';
import Fewd from './components/Fewd';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      foodPlaces: [],
      categories: [],
    };
    this.sendCategory = this.sendCategory.bind(this);
    this.setTerm = this.setTerm.bind(this);
  }
  sendCategory = e => {
    e.preventDefault();
    axios
      .get(`api/${this.state.term}`)
      .then(res => this.setState({ foodPlaces: res.data }))
      .catch(err => console.log(err));
  };
  setTerm = e => {
    e.preventDefault();
    this.setState({ term: e.target.value });
  };
  componentDidMount() {
    const getCategoriesFromApi = () => axios.get('/api');
    const getLocation = () => axios.get('http://ipinfo.io/');

    axios.all([getCategoriesFromApi(), getLocation()]).then(
      axios.spread((categories, ip) => {
        const locArray = ip.data.loc.split(',');
        this.setState({
          categories,
        });
        this.lat = locArray[0];
        this.lon = locArray[1];
      }),
    );
  }
  render() {
    return (
      <div className="App">
        <Fewd
          foodPlaces={this.state.foodPlaces}
          setTerm={this.setTerm}
          sendCategory={this.sendCategory}
          {...this.state}
        />
      </div>
    );
  }
}
