var itemPrice = 343.10;
var amountOfMoneyInWallet = 456.82;
var numberOfFriends = 28;
var ageInYears = 80;
var firstName = "Wilie";
var lastName = "Coyote";
var middleInitial = "E.";

var fullName = (firstName + " " + middleInitial + " " + lastName);

console.log("Amount of money left in wallet is: $" + (amountOfMoneyInWallet - itemPrice));
console.log("The number of friends " + fullName + " has made in his lifetime is: " + ageInYears / numberOfFriends);
console.log("Full Name: " + fullName);