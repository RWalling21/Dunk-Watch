const { program } = require('commander');
const DunkWatchAPI = require('../api/dunkWatch.js');

const dunkWatchAPI = new DunkWatchAPI();

program
    .name('dunk-watch')
    .description('CLI to display current NBA scores')
    .version('0.0.1')
    .option('-a, --all', 'Display with all stats')
    .option('-s, --slim', 'Display only the score and team name')
    .option('-c, --current', 'Only display current games')

program.parse(process.argv);

const options = program.opts();

(async () => {
    try {
        if (options.all) {
            await dunkWatchAPI.printScoreboard({ all: true });
        } else if (options.slim) {
            await dunkWatchAPI.printScoreboard({ slim: true });
        } else if (options.current) {
            await dunkWatchAPI.printScoreboard({ current: true });
        } else {
            await dunkWatchAPI.printScoreboard({});
        }
    } catch (error) {
        console.error('Error printing scoreboard:', error);
    }
})();
        