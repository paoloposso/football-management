const gamesRepo = require('../repository/games-repo');
const playersRepo = require('../repository/players-repo');

/**
 * 
 * @param {Date} sinceDate 
 */
module.exports.getInactivePlayers = async (sinceDate) => {

    if (isNaN(Date.parse(sinceDate))) {
        return Promise.reject(`Invalid date: ${sinceDate}`);
    }

    const [games, players] = await Promise.all([gamesRepo.getGamesByMinDate(sinceDate), playersRepo.getPlayersByMaxRegisteredDate(sinceDate)]);

    let playersInMatches = [];

    games.forEach(game => {
        playersInMatches = playersInMatches.concat(game.subscribed_users);
    });

    playersInMatches = playersInMatches.filter((item, pos) => playersInMatches.indexOf(item) === pos);

    return players.filter(player => !playersInMatches.includes(player._id)).map(p => p._id);
}

/**
 * 
 * @param {number} maxAverage 
 * @param {number} numberOfGames
 */
module.exports.getPlayersByAverageReview = async (maxAverage, numberOfGames) => {
    const playersReviews = await playersRepo.getPlayersLatestReviews(numberOfGames);
    
    return playersReviews.filter(
        p => p.reviews.reduce((total,cur) => total + cur.rating, 0) / p.reviews.length < maxAverage
    ).map(p => p.userId);
}
