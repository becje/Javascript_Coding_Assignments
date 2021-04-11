/*Q2a. Create an array called names then use a loop to iterate through the array
and calculate the average number of letters per name and print the result to the console.*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//Calculates number of letters per name
let lengths = names.map(function(element) {
    return element.length;
});
//loop to iterate through array and calculate average number of letters per name and print to console.
let total = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log('Q2a. Average number of letters per name: ' + total / names.length);

/*Q2b. Use a loop to iterate through the array again and concatenate all the names together, 
separated by spaces, and print the result to the console.*/

console.log('Q2b. Concatenated names seperated by spaces: ' + names.join(' '));