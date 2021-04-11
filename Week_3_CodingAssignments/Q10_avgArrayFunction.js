/*Q10. Write a function that takes an array of numbers and returns the average of all the elements in the array.. */
let numbers = [51, 45.6, 93, 86, 8.97]

/*Calculates the average of the numbers in the arry*/
let avg = numbers.reduce(function(accumulator, currentValue, index, array) {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    } else {
        return accumulator;
    }
});
/*Prints the average to the console and rounds decimals to whole number */
console.log('Q10. The average of all element in the array is: ' + Math.round(avg));