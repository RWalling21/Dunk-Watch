const axios = require('axios');
const moment = require('moment-timezone');

class dunkWatchAPI  {
    /**
     * @description API Object to fetch live NBA data
     * @param {*} timeZone [optional] timezone that games are fetched from
     */
    constructor(timeZone='America/New_York') {
        this.currDate = moment().tz(timeZone).format('YYYY-MM-DD');
        this.apiInstance = axios.create({});
    }

    /**
     * Returns a string representation of the dunkWatchAPI object
     * @returns {String}
     */
    toString() {
        return 'Dunk Watch API';
    }

    /**
     * Handles a generic API request
     * @param {string} endpoint - The API endpoint.
     * @param {Object} params - The query parameters.
     * @returns {Promise<Object>} - The API response data.
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async handleRequest(endpoint, params = {}) {
        try {
            const response = await this.apiInstance.get(endpoint, { params });
            return response;
        } catch (error) {
            console.error(`Error fetching data from ${endpoint}:`, error);
            return null;
        }
    }

    /**
     * Fetches current games and their score
     * 
     * @returns {JSON} - Returns the scoreboard object in JSON format
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchScoreboard() {
        // Pull current scoreboard data from nba.com
        const endpoint = "https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json";

        const response = await this.apiInstance.get(endpoint);
        
        return response.data.scoreboard;
    }

    /**
     * Fetches the current scoreboard data and formats it for display.
     */
    async printScoreboard() {
        const scoreboard = await this.fetchScoreboard();
        const games = scoreboard.games;
        
        console.log('---------------------------');
        
        games.forEach(game => {
            const homeTeam = game.homeTeam.teamName;
            const homeScore = game.homeTeam.score;
            const awayTeam = game.awayTeam.teamName;
            const awayScore = game.awayTeam.score;
            const gameStatus = game.gameStatus;
            const gameStatusText = game.gameStatusText;
            const series = game.seriesText;

            const periods = {1: "1st", 2: "2nd", 3: "3rd", 4: "4th"}
            const period = game.period;

            if (gameStatus === 1) {
                console.log(`${homeTeam} vs ${awayTeam}`);
                console.log(`Scheduled Start: ${gameStatusText}`);
                console.log(`Series: ${series}`);
            }
            else if (gameStatus === 2) {
                console.log(`${homeTeam} vs ${awayTeam}`);
                console.log(`Current Score: ${homeTeam} ${homeScore} - ${awayTeam} ${awayScore} | ${periods[period]} period`);
                console.log(`Series: ${series}`);
            } else {
                console.log(`${homeTeam} vs ${awayTeam}`);
                console.log(`Final Score: ${homeTeam} ${homeScore} - ${awayTeam} ${awayScore}`);
                console.log(`Series: ${series}`);
            }
            
            console.log('---------------------------');
        });
    }
}

module.exports = dunkWatchAPI;
