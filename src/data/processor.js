import Game from '../models/game.js';

/**
 * Maps the fetched data to game objects
 */
class GameProcessor {
    static processGames(scoreboard) {
        return scoreboard.games.map(gameData => new Game(
            gameData.homeTeam.teamName,
            gameData.homeTeam.score,
            gameData.awayTeam.teamName,
            gameData.awayTeam.score,
            gameData.gameStatus,
            gameData.gameStatusText,
            gameData.seriesText,
            gameData.period
        ));
    }
}

export default GameProcessor;
