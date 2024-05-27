import chalk from 'chalk';

class Display {
    static printGames(games) {
        games.forEach(game => {
            const homeTeam = chalk.green(`${game.homeTeam} (${game.homeScore})`);
            const awayTeam = chalk.red(`${game.awayTeam} (${game.awayScore})`);
            const period = game.period || 'N/A';
            const series = game.series || 'N/A';

            const separator = chalk.blue('----------');
            const gameLine = `${homeTeam} vs ${awayTeam}`;
            const periodLine = `${period} period - Series: ${series}`;

            console.log(separator);
            console.log(`| ${gameLine.padEnd(40)} |`);
            console.log(`| ${periodLine.padEnd(40)} |`);
            console.log(separator);
            console.log('');
        });
    }
}

export default Display;