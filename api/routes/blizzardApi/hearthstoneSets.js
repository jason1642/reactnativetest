const express = require('express');
const app = express();
const axios = require('axios');
const blizzardRouter = express.Router();
const getSetNames = require('../../middleware/getSetNames')
const getToken = require('../blizzardApi/getToken')

blizzardRouter.get('/api/blizzard/all-sets-names', getToken, getSetNames);

module.exports = blizzardRouter;