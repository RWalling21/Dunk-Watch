const DunkWatchAPI = require('./dunkWatch.js');

const dunkWatchAPI = new DunkWatchAPI();

const scoreboard = dunkWatchAPI.fetchScoreboard()

dunkWatchAPI.formatScoreboard(scoreboard);