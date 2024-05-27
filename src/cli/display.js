import chalk from 'chalk';

class Display {
    static printGames(games) {
        games.forEach(game => {
            const homeTeam = chalk.green(`${game.homeTeam} - ${game.homeScore}`);
            const awayTeam = chalk.red(`${game.awayTeam} - ${game.awayScore}`);
            const period = game.period || 'N/A';
            const series = game.series || 'N/A';

            const separator = '----------';
            const gameLine = `${homeTeam} vs ${awayTeam}`;
            const periodLine = `${period} period - Series: ${series}`;

            console.log(separator.padEnd(39, '-'));
            console.log(`| ${gameLine.padEnd(35)} |`);
            console.log(`| ${periodLine.padEnd(35)} |`);
            console.log(separator.padEnd(39, '-'));
            console.log('');
        });
    }
}

export default Display;