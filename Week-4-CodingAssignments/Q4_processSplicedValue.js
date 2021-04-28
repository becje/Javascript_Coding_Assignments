/*Q4a. Write a new function named processSplicedValue that takes 3 parameters 
– an array, the index of the element to be spliced from the array, and a callback function 
that will process the sliced element */

let weaponInventory = ['Dwarven Waraxe', 'Long Sword', 'Greatsword', 'Battleaxe', 'Falchion', 'Repeating Crossbow', 'War Hammer'];

/*Inside the function, use the first two parameters to splice an element from the array 
Inside the function, call the callback function and pass the spliced value into it.*/
function processSplicedValue(weaponInventory, index, callback) {
    let weapons = weaponInventory.splice(index, 2);
    callback(weapons);
}
/*Outside of the function, create an array of strings, call processSplicedValue, and pass in
the array you just created, an index number, and console.log into it.  */
processSplicedValue(weaponInventory, 3, console.log);

/*4b. Call the processSplicedValue function again but this time pass in the alert method instead of console.log.*/
processSplicedValue(weaponInventory, 5, alert);

/*4c. Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.*/
processSplicedValue(weaponInventory, 2, (equipedWeapons) => alert('My equipped weapons are: \n' + equipedWeapons.join(' and\n')));

/*4d. Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.*/
function newWeapon(weaponName) {
    alert('\nMy new weapon is a: \n' + weaponName);
}
processSplicedValue(weaponInventory, 2, newWeapon);