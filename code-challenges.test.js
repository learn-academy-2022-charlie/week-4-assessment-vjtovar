// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { CustomConsole } = require("@jest/console")
// const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre","aquamarine", "saffron"]
     // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine","periwinkle", "indigo", "ochre"]))
    })
})
// FAIL  ./code-challenges.test.js
// shuffle
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
// ● shuffle › takes in an array, removes the first item from the array and shuffles the remaining content
//   ReferenceError: shuffle is not defined


// b) Create the function that makes the test pass.
// Declare a function named shuffle
// Assign array as parameter
// Remove first item in array using splice 
// Use sort method and Math.random to shuffle elements randomly 

const shuffle = (array) => {
    return array.splice(1).sort(() => Math.random() - 0.5)
}
// PASS  ./code-challenges.test.js
// shuffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe("minMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})
// FAIL  ./code-challenges.test.js
// minMax
//   ✕ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)
// ● minMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order
//   ReferenceError: minMax is not defined


// b) Create the function that makes the test pass.
// Declare a function named minMax
// Assign array as parameter
// Create new array that will contain min and max numbers
// Use Math.min/max to find max and min numbers in the array
// Return the new array sorted in ascending order

const minMax = (array) => {
    let newArray = [Math.min(...array), Math.max(...array)]
    return newArray.sort((a, b) => a - b)
}
// PASS  ./code-challenges.test.js
// minMax
//   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("noDupValues", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(noDupValues(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})
// FAIL  ./code-challenges.test.js
//   noDupValues
//     ✕ takes in two arrays as arguments and returns one array with no duplicate values
//   ● noDupValues › takes in two arrays as arguments and returns one array with no duplicate values
//     ReferenceError: noDupValues is not defined


// b) Create the function that makes the test pass.
// Declare a function named noDupValues
// Assign array1 and array2 as parameters 
// Combine the two arrays using spread operator instead of using concat method
// Use filter method to iterate over the array  
// Use indexOf to find first occurance of the value 
// Return array with no duplicate values 

const noDupValues = (array1, array2) => {
    let combinedArray = [...array1, ...array2]
    let noDupArr = combinedArray.filter((value, index) => index === combinedArray.indexOf(value))
    return noDupArr
}
// PASS  ./code-challenges.test.js
// noDupValues
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
