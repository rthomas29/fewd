const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
const { request, GraphQLClient } = require('graphql-request');

const client = new GraphQLClient('https://api.yelp.com/v3/graphql', {
  headers: {
    Authorization:
      'Bearer 8a_Em0g0bSIOuAXkQ-VtcDV6f0Z5DyvAKPDhJU1W9lQ4HOC-GQOuYpAGG4Wu203pcGUnkM-PAaGhlKwpZxAsA227jTa0eTY-ElO49jt3mY4amGWNXTG3dSF45qipWnYx',
  },
});

const query = `{
    business(id: "garaje-san-francisco") {
        name
        id
        rating
        url
    }
}`;
router.get('/search', (req, res, next) => {
  client
    .request(query)
    .then(data => res.send(data))
    .catch(err => console.error(err.message));
});

router.get('/search/:category', (req, res, next) => {
  const variables = {
    category: req.params.category,
  };
  const query = `query getFood($category: String!) {
    search(term: $category
            location: "Miami, Florida",
            limit: 10
            open_now: true) {
        total
        business {
            name
            url
            phone
        }
    }
}`;
  client
    .request(query, variables)
    .then(data => res.send(data.search.business))
    .catch(err => console.log(err));
});
module.exports = router;
