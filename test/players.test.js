const service = require('../business/players');

const { TestScheduler } = require("jest");
test('should get inactive players since given date', async () => {
    const list = await service.getInactivePlayers('2020-12-30');

    console.log(`players inactive since 2020-12-30: ${list}`);

    expect(list.length).not.toBe(0);
});

test('should get inactive players since given date', async () => {
    const list = await service.getInactivePlayers('2020-12-01');

    console.log(`players inactive since 2020-12-01: ${list}`);

    expect(list.length).toBe(0);
});

test('should receive date parameter error', async (done) => {
    
    try
    {
        await service.getInactivePlayers('2020-12-35');
        done.fail('should receive date parameter error');
    } catch (err) {
        console.log(err);
        expect(true);
        done();
    }
});

test('should get players by average review', async () => {
    const list = await service.getPlayersByAverageReview(3, 5);

    console.log(`list of players by average review below 3 int last 5 games: ${list}`);

    expect(list.length).not.toBe(0);
});

test('should get players by average review', async () => {
    const list = await service.getPlayersByAverageReview(1, 5);

    console.log(`list of players by average review below 1 int last 5 games: ${list}`);

    expect(list.length).toBe(0);
});