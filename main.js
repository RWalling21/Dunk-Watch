const { program } = require('commander');
const DunkWatchAPI = require('./dunkWatch.js');

const dunkWatchAPI = new DunkWatchAPI();
const scoreboard = dunkWatchAPI.fetchScoreboard()

program
    .name('dunk-watch')
    .description('CLI to display current NBA scores')
    .version('0.0.1')
    .option('-a, --all', 'Display with all stats')
    .option('-s, --slim', 'Display only the score and team name')
    .option('-c, --current', 'Only display current games')

program.parse(process.argv);

const options = program.opts();

if (options.all) dunkWatchAPI.printScoreboard(scoreboard);
if (options.slim) console.log("Slim Endpoint");
if (options.current) console.log("Current Endpoint");
        
