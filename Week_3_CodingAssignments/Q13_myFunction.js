/*Q12. Create a function of your own that solves a problem. In comments, write what the function 
does and why you created it. */

function showPopUp(firstName, lastName) {
    function Hello() {
        alert('Hello ' + firstName + ' ' + lastName)
    }
    return Hello();
}
showPopUp('Bugs', 'Bunny');

/*Nested function. Creates a popup message box saying "Hello" and populates with the values of the 
firstName and lastName provided. Created for practice using a nested function in addition to starting
to create code to engage the end user.*/