const axios = require('axios');
const moment = require('moment-timezone');
const ScrapeScores = require('./scraper.js');

class dunkWatchAPI  {
    /**
     * @description Basic API for ease of development. Based off of balldontliejs, https://github.com/blockchaincavs/balldontliejs
     * @param {*} API_KEY ballDontLie API key - https://app.balldontlie.io/
     * @param {*} timeZone [optional]
     */
    constructor(API_KEY=null, timeZone='America/New_York') {
        this.API_BASE_URL = 'https://api.balldontlie.io/v1/';
        this.currDate = moment().tz(timeZone).format('YYYY-MM-DD');
        this.apiInstance = axios.create({
            baseURL: this.API_BASE_URL, headers: {Authorization: API_KEY}
        });
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
            return response.data.data;
        } catch (error) {
            console.error(`Error fetching data from ${endpoint}:`, error);
            return null;
        }
    }

    /**
     * Fetches player stats for the given date range
     * 
     * @param {number} [per_page=25] - The number of results to retrieve per page.
     * @param {string} [start_date=currDate] - The start date for the stats retrieval in YYYY-MM-DD format.
     * @param {string} [end_date=currDate] - The end date for the stats retrieval in YYYY-MM-DD format.
     * @returns {Promise<void>} - A promise that resolves when the stats have been fetched and logged.
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchStats(per_page=25, start_date=this.currDate, end_date=this.currDate) {
        const endpoint = 'stats'
        const params = { cursor: 0, per_page, start_date, end_date };

        const stats = await this.handleRequest(endpoint, params);
        
        if (stats && stats.length > 0) {
            stats.forEach(stat => {
                console.log(`Player: ${stat.player.first_name} ${stat.player.last_name}`);
                console.log(`Points: ${stat.pts}`);
                console.log(`Rebounds: ${stat.reb}`);
                console.log(`Assists: ${stat.ast}`);
                console.log('---------------------------');
            });
        } else {
            console.log('No stats available for the given date range.');
        }
    }
    
    /**
     * Fetches games for the given date range
     * 
     * @param {number} [per_page=25] - The number of results to retrieve per page.
     * @param {string} [start_date=currDate] - The start date for the stats retrieval in YYYY-MM-DD format.
     * @param {string} [end_date=currDate] - The end date for the stats retrieval in YYYY-MM-DD format.
     * @returns {Promise<void>} - A promise that resolves when the stats have been fetched and logged.
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchGames(per_page=25, start_date=this.currDate, end_date=this.currDate) {
        const endpoint = 'games'
        const params = { cursor: 0, per_page, start_date, end_date };

        const games = await this.handleRequest(endpoint, params);

        if (games && games.length > 0) {
            games.forEach(game => {
                console.log(`Home Team: ${game.home_team.city} ${game.home_team.name} - ${game.home_team_score}`);
                console.log(`Away Team: ${game.visitor_team.city} ${game.visitor_team.name} - ${game.visitor_team_score}`);
                console.log('---------------------------');
            })
        } else {
            console.log('No games available for the given date range.');
        }
    }
    
    /**
     * Fetches basketball teams and logs their information
     * 
     * @returns {Promise<void>} - A promise that resolves when the teams have been fetched and logged.
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchTeams() {
        const teams = await this.handleRequest(endpoint);

        if (teams && teams.length > 0) {
            teams.forEach(team => {
                console.log(`Team Name: ${team.full_name}`);
                console.log(`City: ${team.city}`);
                console.log('---------------------------');
            });
        } else {
            console.log('No teams available.');
        }
    }

    async currentScore() {
        const scores = await ScrapeScores();

        if (scores && scores.length > 0) {
            scores.forEach(score => {
                console.log(`Home Team: ${score.team1} - ${score.score1}`);
                console.log(`Away Team: ${score.team2} - ${score.score2}`);
                console.log('---------------------------');
            });
        } else {
            console.log('No scores available.');
        }
    }
}

module.exports = dunkWatchAPI;
