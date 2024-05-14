const axios = require('axios');
const moment = require('moment-timezone');

const currDate = moment().tz('America/New_York').format('YYYY-MM-DD');

class dunkWatchAPI  {
    /**
     * @description Basic API for ease of development. Based off of balldontliejs, https://github.com/blockchaincavs/balldontliejs
     * @param {*} API_KEY 
     */
    constructor(API_KEY=null) {
        this.API_BASE_URL = 'https://api.balldontlie.io/v1/';

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
     * Fetches player stats for the given date range
     * 
     * @param {number} [per_page=25] - The number of results to retrieve per page.
     * @param {string} [start_date=currDate] - The start date for the stats retrieval in YYYY-MM-DD format.
     * @param {string} [end_date=currDate] - The end date for the stats retrieval in YYYY-MM-DD format.
     * @returns {Promise<void>} - A promise that resolves when the stats have been fetched and logged.
     * 
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchStats(per_page=25, start_date=currDate, end_date=currDate) {
        try {
            const endpoint = 'stats'
            const params = { cursor: 0, per_page, start_date, end_date };

            const response = await this.apiInstance.get(endpoint, { params });

            const stats = response.data.data;
            
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
        } catch (error) {
            console.error('Error fetching game stats: ', error);
        }
    }
    
    /**
     * Fetches games for the given date range
     * 
     * @param {number} [per_page=25] - The number of results to retrieve per page.
     * @param {string} [start_date=currDate] - The start date for the stats retrieval in YYYY-MM-DD format.
     * @param {string} [end_date=currDate] - The end date for the stats retrieval in YYYY-MM-DD format.
     * @returns {Promise<void>} - A promise that resolves when the stats have been fetched and logged.
     * 
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchGames(per_page=25, start_date=currDate, end_date=currDate) {
        try {
            const endpoint = 'games'
            const params = { cursor: 0, per_page, start_date, end_date };
            
            const response = await this.apiInstance.get(endpoint, { params });
    
            const games = response.data.data;
    
            if (games && games.length > 0) {
                games.forEach(game => {
                    console.log(`Home Team: ${game.home_team.name}`);
                    console.log(`Away Team: ${game.visitor_team.name}`);
                    console.log('---------------------------');
                })
            } else {
                console.log('No games available for the given date range.');
            }
        } catch (error) {
            console.error('Error fetching games: ', error);
        }
    }
    
    /**
     * Fetches basketball teams and logs their information
     * 
     * @returns {Promise<void>} - A promise that resolves when the teams have been fetched and logged.
     * 
     * @throws {Error} - Throws an error if there is an issue with the API request.
     */
    async fetchTeams() {
        try {
            const endpoint = 'teams';
            const response = await this.apiInstance.get(endpoint);

            const teams = response.data.data;

            if (teams && teams.length > 0) {
                teams.forEach(team => {
                    console.log(`Team Name: ${team.full_name}`);
                    console.log(`City: ${team.city}`);
                    console.log('---------------------------');
                });
            } else {
                console.log('No teams available.');
            }
        } catch (error) {
            console.error('Error fetching teams: ', error);
        }
    }
}

module.exports = dunkWatchAPI;
