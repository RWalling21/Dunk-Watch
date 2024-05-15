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
     * @returns {Promise<void>} - A promise that resolves when the teams have been fetched and logged.
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchScoreboard() {
        // Pull current scoreboard data from nba.com
        const endpoint = "https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json";

        const response = await this.apiInstance.get(endpoint);
        
        return scoreboard = response.data.scoreboard;
    }

    // Format Scoreboard method 
    
}

module.exports = dunkWatchAPI;
