//Q1a. Create an array called ages containing a list of ages provided.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
let firstElement = ages[0];
let lastElement = ages[ages.length - 1];

/* Code to programmatically subtract the value of the first element in the array
 from the value in the laste element of the array then print to the console. */
let sum = lastElement - firstElement
console.log('Q1a. The value of the first element subtracted from the last element is: ' + sum);

/*Q1b. Add a new age to the array and repeat previous step to ensure it is dynamic.
Used a random number generator to generate new ages for the array. */
let myAges = [98, 62, 16, 13, 5, 55, 19, 30, 78, 35, 62, 55, 47, 53]
let elementFirst = myAges[0];
let elementLast = myAges[myAges.length - 1];
let mySum = elementLast - elementFirst;
console.log('Q1b. The new value of the first element subtracted from the last element is: ' + mySum);

//Q1c. Use a loop to iterate through the array and calculate the average age and print to console.
let avgAges = [3, 9, 23, 64, 2, 8, 28, 93]
let average = 0
for (let i = 0; i < avgAges.length; i++) {
    average += avgAges[i];
}
console.log('Q1c. The average age is: ' + average / avgAges.length);