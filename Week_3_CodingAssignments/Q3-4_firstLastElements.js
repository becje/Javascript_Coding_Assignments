let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Q3. Two examples of how to access the last element of any array?
let lastArrayElement = names[names.length - 1];
let lastArray = names.slice(-1);
console.log('Q3. Results of first example on accessing the last element of any array: ' + lastArrayElement);
console.log('Q3. Results of the second example on accessing the last element of any array: ' + lastArray);

//Q4. Two examples of how to access the first element of any array?
let firstArrayElement = names[0];
[firstArray] = names;
console.log('Q4. Results of first example on accessing the first element of any array:  ' + firstArrayElement);
console.log('Q4. Results of second example on accessing the first element of any array: ' + firstArray);