require('dotenv').config();
const DunkWatchAPI = require("./dunkWatch.js");

const dunkWatchAPI = new DunkWatchAPI(process.env.API_KEY);

dunkWatchAPI.fetchGames(per_page=5);

dunkWatchAPI.fetchStats(per_page=5);
