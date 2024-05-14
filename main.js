require('dotenv').config();
const StatApi = require("./statapi.js");

const statApi = new StatApi();

statApi.fetchBasketballStats();
