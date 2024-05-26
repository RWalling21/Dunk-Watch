const axios = require('axios');

class dunkWatchAPI  {
    /**
     * @description API Object to fetch live NBA data
     */
    constructor() {
        this.apiInstance = axios.create({});
        this.scoreboard;
    }

    /**
     * Returns a string representation of the dunkWatchAPI object
     * @returns {String}
     */
    toString() {
        return 'Dunk Watch API';
    }

    /**
     * Fetches current games and their scoreboard
     * 
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchCurrentScoreboard() {
        try {
            // Pull current scoreboard data from nba.com
            const endpoint = 'https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json';

            const response = await this.apiInstance.get(endpoint);

            this.scoreboard = response.data.scoreboard;
        } catch (error) {
            console.error(`Error fetching data:`, error);
        }
    }

    /**
     * Prints a formatted scoreboard to the command line.
     */
    async printScoreboard(options = {}) {
        await this.fetchCurrentScoreboard();
        
        const games = this.scoreboard.games;
        
        
    }
}

module.exports = dunkWatchAPI;
