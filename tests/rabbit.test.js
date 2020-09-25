// const { TestScheduler } = require('jest');
const app = require('../rabbit');

test("should show that favouriteNumber equals 4", () => {
    expect(app.freddy.name).toBe("Freddy");
})

test("should show a decrease in hunger when decreaseHunger is called", () => {
    expect(app.freddy.hunger).toBe(99);
    app.freddy.decreaseHunger()
    expect(app.freddy.hunger).toBe(98);

})