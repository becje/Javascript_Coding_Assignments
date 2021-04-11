/*Q11. Write a function that takes two arrays of numbers and returns true if the average of the 
elements in the first array is greater than the average of the elements in the second array. */

console.log('Q10. Comparing averages of two arrays and returning a boolean value based on the value of the first array compared to the second array.')

let numbers = [14.8, 75, 21.3, 84.1, 90]
let numbers2 = [78.62, 72.01, 87.98, 16.35, 54.36]

/*Calculates the average of the numbers in the numbers arry*/
let avg = numbers.reduce(function(accumulator, currentValue, index, array) {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    } else {
        return accumulator;
    }
});
/*Calculates the average of the numbers in the numbers2 arry*/
let avg2 = numbers2.reduce(function(accumulator, currentValue, index, array) {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    } else {
        return accumulator;
    }
});
/*prints the averages of both arrays to the console*/
console.log('\nThe average of all element in the first array is: ' + Math.round(avg))
console.log('The average of all the elements in the second array is: ' + Math.round(avg2))
    /*compares the average of the numbers array to the average of the numbers2 array and returns true or false
    depending on if the average of the numbers array is greater than the numbers2 array. Then prints the results
    to the console.*/
if (avg > avg2) {
    console.log('True: ' + Math.round(avg) + ' is greater than ' + Math.round(avg2))
} else if (avg < avg2) {
    console.log('False: ' + Math.round(avg2) + ' is less than: ' + Math.round(avg2))
}


/*Comparison code to show the code works and will return true if the average of the 
first array is greater than than the second array*/

let numbers3 = [61.83, 60.51, 93.78, 98.26, 15.02]
let numbers4 = [22.5, 50, .1, 67, 73.8]

let avg3 = numbers3.reduce(function(accumulator, currentValue, index, array) {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    } else {
        return accumulator;
    }
});
let avg4 = numbers4.reduce(function(accumulator, currentValue, index, array) {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    } else {
        return accumulator;
    }
});
console.log('\nThe average of all element in the third array is: ' + Math.round(avg3))
console.log('The average of all the elements in the fourth array is: ' + Math.round(avg4))
if (avg3 > avg4) {
    console.log('True: ' + Math.round(avg3) + ' is greater than ' + Math.round(avg4))
} else if (avg3 < avg4) {
    console.log(' False: ' + Math.round(avg3) + ' is less than: ' + Math.round(avg4))
}