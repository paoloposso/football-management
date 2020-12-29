const service = require('../business/fields');

test('should get count of available game slots on field field_id1', async () => {
    const count = await service.getFieldAvailability("field_id1", '2021-01-01', '2021-01-31');

    console.log(`number of available slots: ${count}`);

    expect(count).not.toBe(0);
});