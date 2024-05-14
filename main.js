const axios = require('axios');
require('dotenv').config();

const today = new Date().toISOString().slice(0, 10);

async function fetchBasketballStats() {
    try {
        const response = await axios.get('https://api.balldontlie.io/v1/stats', {
            headers: {
                'Authorization': process.env.API_KEY,
            },
            params: {
                'start_date': today,
                'end_date': today,
            }
        });
        const stats = response.data.data;

        console.log(stats)
        
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

async function fetchBasketballGames() {
    try {
        const response = await axios.get("https://api.balldontlie.io/v1/games", {
            headers: {
                'Authorization': process.env.API_KEY,
            },
            params: {
                'start_date': today,
                'end_date': today,
            }
        });

        const games = response.data.data;

        games.forEach(game => {
            console.log(`Home Team: ${game.home_team.name}`);
            console.log(`Away Team: ${game.visitor_team.name}`);
        })
    } catch (error) {
        console.error('Error fetching games: ', error)
    }
}

async function fetchBasketballTeams() {
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

fetchBasketballGames();
