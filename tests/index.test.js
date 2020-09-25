const app = require('../index');
// import { add, nameArray, flowerShop} from '../index';

test("should return 11 when 7 and 4 are passed through it", () => {
    expect(app.add(7, 4)).toBe(11);
})

// // expect(functionThatWeWantToTest).tobe(answerWeWant)
// test("that array does contain Shaun", () => {
//     expect(app.nameArray).toHaveLength(4);
// })


// test("should total 0.3 when 0.1 and 0.2 are returned", () => {
//     expect(app.flowerShop()).toBeCloseTo(0.3)
//     // difference can be 0.005 - close but doesn't have to be equal to
// })


// describe("the nameArray tests", () => {
//     test("that array does contain Shaun", () => {
//         expect(app.nameArray).toContain("Shaun");
//     })
//     test("that array should be Shaun", () => {
//         expect(app.nameArray).toBe("Shaun");
//     })
// })
//method is our way of running a test

// .toBE()
// .toHaveLength()
// .toEqual()
// .toContain() is looking for an array or object 
// .toBeDefined()
// .toHaveBeenCalled()
// .toBeCloseTo()

// .not.toBe()