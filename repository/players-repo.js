const sch = require('../data/schema.json');
const schAdd = require('../data/schema-additional.json');

/**
 * @param {Date} maxDate
 */
module.exports.getPlayersByMaxRegisteredDate = (minDate) => {
    //avoid getting players who where registered after the given date
    return Promise.resolve(sch.users.filter(user => user.registered < minDate));
}

/**
 * @param {number} numberOfGames
 */
module.exports.getPlayersLatestReviews = (numberOfGames) => {
    let playersReviews = [];

    playersReviews = Object.keys(schAdd.reviews_by_user).map((key, index) => {
        return { 
            userId: key,
            reviews: schAdd.reviews_by_user[key]
        }
    });

    return Promise.resolve(playersReviews);
}
