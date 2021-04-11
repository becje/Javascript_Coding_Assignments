function howdy(word, num) {
    let result = '';
    while (num > 0) {
        result += word;
        num--;
    }
    return result;
}
console.log(howdy('Hello \n', 3)); /*'Hello' in English */
console.log(howdy('Bonjour \n', 4)); /*'Hello' in French */
console.log(howdy('Hola \n', 5)); /*'Hello' in Spanish */
console.log(howdy('Kon\'nichiwa \n', 6)); /*'Hello' in Japanese */