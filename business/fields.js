const gamesRepo = require('../repository/games-repo');
const fieldsRepo = require('../repository/fields-repo');
const moment = require('moment');

/**
 * 
 * @param {string} fieldId 
 * @param {Date} startDate 
 * @param {Date} endDate 
 */
module.exports.getFieldAvailability = async (fieldId, startDate, endDate) => {
    const [games, field] = await Promise.all([gamesRepo.getGamesByFieldAndMinDate(fieldId, Date.parse(startDate)),
        fieldsRepo.getById(fieldId)]);

    if (!field) {
        return Promise.reject(`Field ID ${fieldId} not found`);
    }

    let totalAvailableSlot = 0;

    for (let cur = moment(startDate, 'YYYY-MM-DD'); cur <= moment(endDate, 'YYYY-MM-DD'); cur.add(1, 'days')) {

        let availableToday = field.field_availability_slots.length;

        games.filter(game => moment(game.start_time).date() === cur.date()).forEach(game => {

            availableToday = 0;
            
            let slots = [...field.field_availability_slots];
            
            let gameStartTime = moment(game.start_time).format('HH:mm');
            let gameEndTime = moment(game.end_time).format('HH:mm');

            let av = slots.filter(slot => slot.start < gameStartTime ||
                slot.start >= gameEndTime);

            availableToday += av.length;
        });

        totalAvailableSlot += availableToday;
    }

    return totalAvailableSlot;
}