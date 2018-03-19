const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
const { request, GraphQLClient } = require('graphql-request');
const populateCategories = require('../readFile');

// populateCategegories will return an array of categories..need to send to client, update state, then render list of categories
const client = new GraphQLClient('https://api.yelp.com/v3/graphql', {
  headers: {
    Authorization:
      'Bearer 8a_Em0g0bSIOuAXkQ-VtcDV6f0Z5DyvAKPDhJU1W9lQ4HOC-GQOuYpAGG4Wu203pcGUnkM-PAaGhlKwpZxAsA227jTa0eTY-ElO49jt3mY4amGWNXTG3dSF45qipWnYx',
  },
});
router.get('/api', (req, res, next) => {
  populateCategories(req, res);
});

router.get('/api/:category', (req, res, next) => {
  const variables = {
    category: req.params.category,
  };
  const query = `query getFood($category: String!) {
    search(term: $category
            location: "Miami, Florida",
            limit: 20,
            open_now: true,
            price: "1, 2") {
        total
        business {
            name
            url
            phone
            price
        }
    }
}`;
  client
    .request(query, variables)
    .then(data => res.send(data.search.business))
    .catch(err => console.log(err));
});
module.exports = router;
