// var obj = require('./sampleData.json');   // Do not use this method to attain JSON from a file - see https://stackoverflow.com/a/25710749

var fs = require('fs');
let sampleData = JSON.parse(fs.readFileSync('./sampleData.json', 'utf8')); // This is the Synchronous version, this can be performed Async as well. This should also be properly Try/Catched.

console.log("Initial sample data: \n", sampleData)

// [].map functionality








// let sampleData = [
//     {
//         id: 1,
//         name: "salad",
//         age: 98,
//         score: 56,
//         isDank: false,
//     },
//     {
//         id: 2,
//         name: "cake",
//         age: 2,
//         score: 99,
//         isDank: true,
//     },
//     {
//         id: 3,
//         name: "turtle",
//         age: 55,
//         score: 44,
//         isDank: false,
//     },
//     {
//         id: 4,
//         name: "laptop",
//         age: 12,
//         score: 76,
//         isDank: true,
//     },
//     {
//         id: 5,
//         name: "vape",
//         age: 34,
//         score: 9999,
//         isDank: true,
//     },
// ];