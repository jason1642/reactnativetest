require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
// const port = process.env.PORT || 8080;


const port = process.env.PORT || '8080';
app.set('port', port);
require('dotenv').config();


app.use(require("./routes/blizzardApi/hearthstoneSets"));
// app.use(require("./routes/blizzardApi/getToken"));

app.use(express.static(path.join(__dirname, 'build')));


app.get('/ping', function (req, res) {
 return res.send('pong');
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, ()=>console.log(`Listening on PORT ${port}`));