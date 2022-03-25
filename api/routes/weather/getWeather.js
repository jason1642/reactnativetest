const express = require('express');
const weatherRouter = express.Router();
const axios = require('axios');


const options = zip => {
  return ({
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: zip},
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': '95e9fc104dmsha6ddc418cd1fc07p1de64cjsn2088bc16337e'
    }
  })
};



weatherRouter.get('/api/weather/:zipcode', (req, res, next) => {
  axios.request(options(req.params.zipcode))
    .then(response=> {
      res.send(response.data)
      
  }).catch(err=> {
    res.send(err)
  });
  
})

module.exports = weatherRouter;