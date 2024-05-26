const axios = require('axios');

class dunkWatchAPI  {
    /**
     * @description API Object to fetch live NBA data
     */
    constructor() {
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
     * Fetches current scoreboards
     * 
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchCurrentScoreboard() {
        try {
            // Endpoint scraped from nba.com
            const endpoint = 'https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json';

            const response = await this.apiInstance.get(endpoint);

            return response.data.scoreboard;
        } catch (error) {
            console.error(`Error fetching data:`, error);
        }
    }
}

module.exports = dunkWatchAPI;
