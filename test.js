// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be 146.26 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(5);

    const expected = 5 * 146.26; 
   
     expect(fromDollarToYen(5)).toBe(731.3); 
})


test("One Yen should be 0.00556 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(500);

    const expected = 500 * 0.00556; 
   
     expect(fromYenToPound(500)).toBe(2.78); 
})