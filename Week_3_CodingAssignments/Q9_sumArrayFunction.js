/*Q9. Write a function that takes an array of numbers and returns true if the sum
of all the numbers in the array is greater than 100. */
let numbers = [3, 6, 4, 8, 0, 2, 1, 7, 7, 5, 9]

/*Adds all the numbers in the arry*/
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
/*Evaluates if the sum of the array is greater than, or less to 100 and return true if
 sum is greater than 100, returns false if less than 100, otherwises states value is equal to 100*/

if (sum > 100) {
    console.log('Q9. The total of the array - numbers is: ' + sum + '\nTrue - The sum of all numbers is greater than 100.\n')
} else if (sum < 100) {
    console.log('Q9. The total of the array - numbers is: ' + sum + '\nFalse - The sum of all numbers is less than 100.\n')
}

/*Example of code returning 'False' if value of array is > 100*/
let numbers2 = [68, 1, 89, 5, 30, 29, 29, 54, 77, 36, 75]

let sum2 = numbers2.reduce(function(total, num) {
    return total + num;
});
if (sum2 > 100) {
    console.log('Q9. The total of the array - numbers2 is: ' + sum2 + '\nTrue - The sum of all numbers is greater than 100.\n')
} else if (sum2 < 100) {
    console.log('Q9. The total of the array - numbers2 is: ' + sum2 + '\nFalse - The sum of all numbers is less than 100.\n')
}