const service = require('../business/fields');

test('should get players by average review', async () => {
    const fields = await service.fieldAvailability('field_id1', '2021-01-01', '2021-01-02');

    console.log(`list of players by average review below 1 int last 5 games: ${list}`);

    expect(list.length).toBe(0);
});