require('dotenv').config();
const DunkWatchAPI = require('./dunkWatch.js');

const dunkWatchAPI = new DunkWatchAPI(process.env.API_KEY);

dunkWatchAPI.fetchGames(25, "2024-05-13", "2024-05-13");