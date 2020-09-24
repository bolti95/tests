const app = require('../index');

test("should return 11 when 7 and 4 are passed through it", () => {
    expect(app.add(7, 4)).toBe(11);
})

// expect(functionThatWeWantToTest).tobe(answerWeWant)
test("test two", () => {

})

//method is our way of running a test