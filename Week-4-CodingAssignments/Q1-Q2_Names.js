/* Question 1: */
let Q1 = `Q1. Using template literals instead of concatenation, write a function that takes
firstName and lastName and returns ‘fistName lastName’`;
console.log(Q1);

/* Assigning template literals */
let firstName = `Bugs`;
let lastName = `Bunny`;

/* Returning 'firstName lastName' and printing fullName to console */
let fullName = `${firstName} ${lastName}`;
console.log('\nHello my name is: ' + fullName);

/* Question 2: */
let Q2 = `\n--------------------------------------------
Q2. Write the same function as above as an arrow function with a diffeerent name`;
console.log(Q2);

let createFullName = (firstName, lastName) => `${firstName} ${lastName}`
let someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
};
console.log('\nHello my name is: ' + createFullName('Elmer', 'Fudd') + ' and I am going to get dat waskly wabbit');