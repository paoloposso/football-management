const gamesRepo = require('../repository/games-repo');
const fieldsRepo = require('../repository/fields-repo');

/**
 * 
 * @param {string} fieldId 
 * @param {Date} startDate 
 * @param {Date} endDate 
 */
const getFieldAvailability = async (fieldId, startDate, endDate) => {
    
    const [games, field] = await Promise.all([gamesRepo.getGamesByFieldAndMinDate(fieldId, Date.now()),
        fieldsRepo.getById(fieldId)]);

    if (!field) {
        return Promise.reject(`Field ID ${fieldId} not found`);
    }

    let timeSlots = field.field_availability_slots;

    timeSlots.foreach(slot)
}

getFieldAvailability("field_id1", '2021-01-01', '2021-01-31')