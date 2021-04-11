/*Q5. Create an array called nameLengths. Write a loop to iterate over the previously 
created names array and add the length of each name to the nameLengths array.*/

console.log('Q5. List of names in array and length of each corresponding name: ');
let nameLengths = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
for (let i = 0; i < nameLengths.length; i++) {
    let letters = nameLengths[i];
    console.log(nameLengths[i] + ' ' + '(' + letters.length + ')');
}

/*Q6. Loop to iterate over the nameLengths array and calculate the sum of all the elements
in the array. Print the result to the console.*/

let count = nameLengths.map(function(element) {
    return element.length;
});

let sum = count.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log('Q6. Calculated sum of all elements in the nameLengths array: ' + sum);