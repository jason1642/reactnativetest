const express = require("express");
const app = express();
const axios = require('axios');
const getTokenRouter = express.Router();

const { BNET_ID, BNET_SECRET } = process.env;

// Use id and secret from battle net developer portal to request a token for the users session 
// - to access the hearthstone api

app.use(async (req, res, next) => {

  await axios
    .request({
      method: 'post',
      url: `https://us.battle.net/oauth/token?client_id=${BNET_ID}&client_secret=${BNET_SECRET}&grant_type=client_credentials`,
    })
    .then(async ele => {
      req.blizzardToken = ele.data.access_token;
      console.log("this is from the get token middleware ")
      next();
    }
  )
    .catch(err => {
    console.log("there was an error in the getToken middleware")
    res.send(err)
    })
  
})

module.exports = app;
