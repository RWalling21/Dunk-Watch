// Slightly more efficient than constructing it each time as it will always be the same
const periodDict = {0: 'N/A', 1: '1st', 2: '2nd', 3: '3rd', 4: '4th'}

class Game {
    constructor(homeTeam, homeScore, awayTeam, awayScore, status, statusText, series, period) {
        this.homeTeam = homeTeam;
        this.homeScore = homeScore;
        this.awayTeam = awayTeam;
        this.awayScore = awayScore;
        this.gameStatus = status;
        this.gameStatusText = statusText;
        this.series = series;
        this.period = periodDict[period];
    }
}

module.exports = Game;
