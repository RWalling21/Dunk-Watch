const axios = require('axios');
const moment = require('moment-timezone');
require('dotenv').config();

const currDate = moment().tz('America/New_York').format('YYYY-MM-DD');

class statAPI  {
    /**
     * @description Basic API for ease of development. Based off of balldontliejs, https://github.com/blockchaincavs/balldontliejs
     * @param {*} timeout 
     * @param {*} API_KEY 
     */
    constructor(timeout=2000, API_KEY=null) {
        this.API_BASE_URL = "http://api.balldontlie.io/v1/";

        this.apiInstance = axios.create({
        baseURL: this.API_BASE_URL, timeout, headers: {Authorization: API_KEY}
        });
    }

    async fetchBasketballStats() {
        try {
            const response = await axios.get('https://api.balldontlie.io/v1/stats', {
                headers: {
                    'Authorization': process.env.API_KEY,
                },
                params: {
                    'start_date': currDate,
                    'end_date': currDate,
                }
            });
    
            const stats = response.data.data;
            
            stats.forEach(stat => {
                console.log(`Player: ${stat.player.first_name} ${stat.player.last_name}`);
                console.log(`Points: ${stat.pts}`);
                console.log(`Rebounds: ${stat.reb}`);
                console.log(`Assists: ${stat.ast}`);
                console.log('---------------------------');
            });
        } catch (error) {
            console.error('Error fetching game stats: ', error);
        }
    }
    
    async fetchBasketballGames() {
        try {
            const response = await axios.get("https://api.balldontlie.io/v1/games", {
                headers: {
                    'Authorization': process.env.API_KEY,
                },
                params: {
                    'start_date': currDate,
                    'end_date': currDate,
                }
            });
    
            const games = response.data.data;
    
            games.forEach(game => {
                console.log(`Home Team: ${game.home_team.name}`);
                console.log(`Away Team: ${game.visitor_team.name}`);
            })
        } catch (error) {
            console.error('Error fetching games: ', error);
        }
    }
    
    async fetchBasketballTeams() {
        try {
            const response = await axios.get("https://api.balldontlie.io/v1/teams", {
                headers: {
                    'Authorization': `${process.env.API_KEY}`,
                }
            });
    
            const teams = response.data.data;
    
            console.log(teams);
        } catch (error) {
            console.error('Error fetching teams: ', error)
        }
    }
}

module.exports = statAPI;
