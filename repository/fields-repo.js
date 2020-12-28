const schema = require('../data/schema.json');

module.exports.getById = async (fieldId) => {
    return Promise.resolve(schema.fields[fieldId]);
}