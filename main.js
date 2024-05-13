const axios = require('axios');
require('dotenv').config();

async function fetchBasketballStats() {
    try {
        const response = await axios.get('https://api.balldontlie.io/v1/stats', {
            headers: {
                'Authorization': `${process.env.API_KEY}`
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
        console.error('Error fetching the stats:', error);
    }
}

fetchBasketballStats();
