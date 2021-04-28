/* Question 3b: Write an arrow function named askAreWeThereYet
that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet
into the callback parameter position. Choose whatever length of time you 
want for the interval. */

const askAreWeThereYet = () => alert('Are we there yet');

setInterval(askAreWeThereYet, 5000);