require('dotenv').config();
const DunkWatchAPI = require("./dunkWatch.js");

const dunkWatchAPI = new DunkWatchAPI(process.env.API_KEY);

dunkWatchAPI.fetchGames();
