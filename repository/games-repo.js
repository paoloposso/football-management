const sch = require('../data/schema.json');

/**
 * @param {Date} maxDate 
 */
module.exports.getGamesByMinDate = async (minDate) => {
    return Promise.resolve(sch.games.filter(game => game.start_time > minDate));
}

/**
 * 
 * @param {string} fieldId
 * @param {Date} minDate
 */
module.exports.getGamesByFieldAndMinDate = async (fieldId, minDate) => {
    return Promise.resolve(sch.games.filter(game => game.field_id === fieldId && Date.parse(game.start_time) > minDate));
}
