import chalk from 'chalk';

const teamColors = {
    'Lakers': { text: '#FDB927', highlight: '#552583' },
    'Warriors': { text: '#1D428A', highlight: '#FFC72C' },
    'Nets': { text: '#FFFFFF', highlight: '#000000' },
    'Celtics': { text: '#009933', highlight: '#FFFFFF' },
    'Hawks': { text: '#E03A3E', highlight: '#C1D32F' },
    'Hornets': { text: '#1D1160', highlight: '#00788C' },
    'Bulls': { text: '#CE1141', highlight: '#000000' },
    'Cavaliers': { text: '#6F263D', highlight: '#FFB81C' },
    'Mavericks': { text: '#00538C', highlight: '#B8C4CA' },
    'Nuggets': { text: '#0E2240', highlight: '#FEC524' },
    'Pistons': { text: '#C8102E', highlight: '#1D42BA' },
    'Rockets': { text: '#CE1141', highlight: '#000000' },
    'Pacers': { text: '#0066ff', highlight: '#FDBB30' },
    'Clippers': { text: '#C8102E', highlight: '#1D42BA' },
    'Grizzlies': { text: '#5D76A9', highlight: '#12173F' },
    'Heat': { text: '#98002E', highlight: '#F9A01B' },
    'Bucks': { text: '#00471B', highlight: '#EEE1C6' },
    'Timberwolves': { text: '#0C2340', highlight: '#236192' },
    'Pelicans': { text: '#0C2340', highlight: '#C8102E' },
    'Knicks': { text: '#006BB6', highlight: '#F58426' },
    'Thunder': { text: '#007AC1', highlight: '#EF3B24' },
    'Magic': { text: '#0077C0', highlight: '#C4CED4' },
    '76ers': { text: '#006BB6', highlight: '#ED174C' },
    'Suns': { text: '#1D1160', highlight: '#E56020' },
    'Trail Blazers': { text: '#E03A3E', highlight: '#000000' },
    'Kings': { text: '#5A2D81', highlight: '#63727A' },
    'Spurs': { text: '#C4CED4', highlight: '#000000' },
    'Raptors': { text: '#CE1141', highlight: '#000000' },
    'Jazz': { text: '#002B5C', highlight: '#00471B' },
    'Wizards': { text: '#002B5C', highlight: '#E31837' },
};

class Display {
    static printGames(games, options = {}) {
        games.forEach(game => {
            const homeTeamColor = teamColors[game.homeTeam] || { text: '#FFFFFF', highlight: '#000000' };
            const awayTeamColor = teamColors[game.awayTeam] || { text: '#FFFFFF', highlight: '#000000' };

            const homeTeam = chalk.hex(homeTeamColor.text).bgHex(homeTeamColor.highlight)(`${game.homeTeam} - ${game.homeScore}`);
            const awayTeam = chalk.hex(awayTeamColor.text).bgHex(awayTeamColor.highlight)(`${game.awayTeam} - ${game.awayScore}`);

            const period = game.period || 'N/A';
            const series = game.series || 'N/A';

            const separator = '----------';
            const gameLine = `${homeTeam} vs ${awayTeam}`;
            const periodLine = `${period} period - Series: ${series}`;

            console.log(separator.padEnd(39, '-'));
            console.log(`| ${gameLine.padEnd()} |`);
            if (options.all) console.log(`| ${periodLine.padEnd(35)} |`);
            console.log(separator.padEnd(39, '-'));
            console.log('');
        });
    }
}

export default Display;