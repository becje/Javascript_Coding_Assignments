/*Q12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

let isHotOutside = true;
let moneyInPocket = 8.10;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        (isHotOutside == false || moneyInPocket < 10.50)
        return false;
    }
}
console.log('Q11a: We can buy drinks today: ' + willBuyDrink(isHotOutside, moneyInPocket));

/*Validating code by changing isHotOutside to false*/
let isHotOutside2 = false;
let moneyInPocket2 = 38.58;

function willBuyDrink(isHotOutside2, moneyInPocket2) {
    if (isHotOutside2 == true && moneyInPocket2 > 10.50) {
        return true;
    } else {
        (isHotOutside2 == false || moneyInPocket2 < 10.50)
        return false;
    }
}
console.log('\nQ11b: We can buy drinks today: ' + willBuyDrink(isHotOutside2, moneyInPocket2));

/*Validating code by changing moneyInPocket to value less than 10.50*/
let isHotOutside3 = true;
let moneyInPocket3 = 8.10;

function willBuyDrink(isHotOutside3, moneyInPocket3) {
    if (isHotOutside3 == true && moneyInPocket3 > 10.50) {
        return true;
    } else {
        (isHotOutside3 == false || moneyInPocket3 < 10.50)
        return false;
    }
}
console.log('\nQ11c: We can buy drinks today: ' + willBuyDrink(isHotOutside3, moneyInPocket3));