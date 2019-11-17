// var obj = require('./sampleData.json');   // Do not use this method to attain JSON from a file - see https://stackoverflow.com/a/25710749

const fs = require('fs');
let sampleData = JSON.parse(fs.readFileSync('./sampleData.json', 'utf8')); // This is the Synchronous version, this can be performed Async as well. This should also be properly Try/Catched.

console.log("Initial sample data: \n", sampleData)

/// [].map functionality
    // method creates a new array with the results of calling a provided function on every element in the calling array.

let sampleDataIds = sampleData.map(data => data.id);
console.log("\nOnly the ids: ", sampleDataIds); // expected output: [1,2,3,4,5]


/// [].reduce functionality
    // Generate a single value or object from an array.
    // reduce passes the result of previous execution (the accumulator) from one array element to the other  (integer, string, object, etc.).

let combinedAges = sampleData.reduce((age, dataObj) => age + dataObj.age, 0);  // initialise age as 0
console.log("\nCombined ages: ", combinedAges) // expected output: 201  (the sum of all the ages in sample data json)

// or we can use to obtain specific objects, such as the thing with highest score:
let highestScore = sampleData.reduce((highestScore, dataObj) => (highestScore.score || 0) > dataObj.score ? highestScore : dataObj, {});
console.log("\nHighest score: ", highestScore.score)


/// [].filter functionality
    // creates a new array with all elements that pass the test implemented by the provided function.
   
// Obtain a new array with only the objects that are not dank
let notDanks = sampleData.filter(data => !data.isDank)   
console.log("\n Non-danks: ", notDanks)


/// map, reduce, filter combined! (chained)
// obtain total score of all danks.

let totalDanksScore = sampleData
    .filter(data => data.isDank)
    .map(data => data.score)
    .reduce((score, data) => score + data, 0);

console.log("\nTotal score of those that are dank: ", totalDanksScore)   