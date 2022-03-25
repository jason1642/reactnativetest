const express = require('express');
const app = express();
const axios = require('axios');



// req.blizzardToken = token needed to access API, a rejection will not reach this middleware
app.use(async (req, res, next) => {


  await axios
    .get(`https://us.api.blizzard.com/hearthstone/metadat8?locale=en_US&set=descent-of-dragons&access_token=${req.blizzardToken}`)
    .then(ele => res.send(ele.data))
    .catch(err => {
      res.send(err)
     })
  // console.log(req.blizzardToken, "this is the second middleware");

  // res.send("This middleware will get all sets names")
});

module.exports = app;