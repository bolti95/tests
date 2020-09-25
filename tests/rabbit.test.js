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

test("should log name message", () => {
    expect(app.freddy.message).toEqual("name added to Rabbit");
})

test("should add new food to rabbitFood", () => {
    expect(app.freddy.rabbitFood).toContain("celery");
})