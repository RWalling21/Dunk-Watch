const puppeteer = require('puppeteer');

/**
 * Scrapes current NBA game scores from the NBA games page.
 * @returns {Promise<Array>} - A promise that resolves to an array of game score objects.
 */
async function scrapeScores() {
    const url = 'https://www.nba.com/games';

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the main game card container to be present
    await page.waitForSelector('.GameCard_gcm__SKtfh');

    // Extract game scores
    const gameScores = await page.evaluate(() => {
        const games = document.querySelectorAll('.GameCard_gcm__SKtfh');

        const data = Array.from(games).map(game => {
            const teamElements = game.querySelectorAll('.MatchupCardTeamName_teamName__9YaBA');
            const scoreElements = game.querySelectorAll('.GameCardMatchup_matchupScoreCard__owb6w');

            if (teamElements.length === 2 && scoreElements.length === 2) {
                return {
                team1: teamElements[0].innerText.trim(),
                team2: teamElements[1].innerText.trim(),
                score1: scoreElements[0].innerText.trim(),
                score2: scoreElements[1].innerText.trim(),
                };
            }
            // Don't return null games
            return null;
        }).filter(game => game !== null);

        return data;
    });

    await browser.close();
    return gameScores;
}

module.exports = scrapeScores;
