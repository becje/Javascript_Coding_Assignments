//2.) Creating and assigning Boolean variables
var isHotOUtside = true;
var isWeekday = true;
var hasMoneyInPocket = false;

//3.) Creating and assigning non-Boolean data type variables
var costOfMilk = 2.99;
var moneyInWallet = 45;
var thirstLevel = 8;

//4.)  Creating variables using the Boolean variables and data types listed previously using the following criteria:
//a.	shouldByIcecream – this should be true if it is hot outside and there is money in your pocket
//b.	willGoSwimming – this should be true if it is hot outside and it is not a weekday
//c.	isAGoodDay – this should be true if it is hot outside, there is money in your pocket, and it is not a weekday
//d.	willBuyMilk – this should be true if it is hot outside, and thirstLevel is greater than or equal to 3, 
//      and moneyInWallet is greater than or equal to 2 times the cost of milk.

var shouldByIcecream = isHotOUtside && hasMoneyInPocket;
var willGoSwimming = isHotOUtside && !isWeekday;
var isAGoodDay = isHotOUtside && hasMoneyInPocket && !isWeekday;
var willBuyMilk = isHotOUtside && thirstLevel >= 3 && moneyInWallet >= (2 * costOfMilk);

console.log(isHotOUtside);
console.log(willGoSwimming);
console.log(isAGoodDay);
console.log(willBuyMilk);