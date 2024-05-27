import {program} from'commander';
import DunkWatchAPI from '../api/dunkWatch.js';
import GameProcessor from '../data/processor.js';
import Display from './display.js';

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
        const scoreboard = await dunkWatchAPI.fetchCurrentScoreboard();
        const games = GameProcessor.processGames(scoreboard);
        Display.printGames(games);
    } catch (error) {
        console.error('DunkWatch Error: ', error)
    }
})();
        