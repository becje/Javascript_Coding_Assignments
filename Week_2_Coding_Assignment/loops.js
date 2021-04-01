console.log('Q6a. A while loop printing all even numbers from 0 to 100');
var array = [];
var i = 0;
while (i <= 100) {
    console.log(i + ' ');
    i = i + 2;
}

console.log('Q6b. A while loop print every 3rd number going backwards from 100 until we reach 0');
var x = 100;
while (x >= 0) {
    console.log(x + ' ');
    x = x - 3;
}

console.log('Q6c. A for loop printing every other number from 1 to 100');
for (let y = 1; y <= 100; y += 2) {
    console.log(y);
}

console.log('Q6d. d. A for loop that prints every number from 0 to 100, but if the number is divisible by 3, it prints “Hello” instead of the number, and if the number is divisible by 5, it prints “World” instead of the number, and if it is divisible by both 3 and 5, it prints “HelloWorld” instead of the number.');
for (let z = 0; z <= 100; z++) {
    if (z % 3 == 0 && z % 5 == 0) {
        console.log('Hello World');
    } else if (z % 3 == 0) {
        console.log('Hello');
    } else if (z % 5 == 0) {
        console.log('World');
    } else {
        console.log(z);
    }
}