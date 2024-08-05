//This line asks the user to enter a number of seconds and stores it in the seconds variable.
//The parseInt function converts the input to a whole number.

let seconds = parseInt(prompt("Enter the number of seconds for the alarm:"));
let message = prompt("Enter the message to display when the alarm goes off:");

// Check if the input is valid. Checks if it's not a number or if it's negative
if (isNaN(seconds) || seconds < 0) {
  alert("Please enter a valid number of seconds");

} else {

  // The first argument is a function that will run when the timer is up
  //The second argument is how long to wait in milliseconds (we multiply seconds by 1000 because setTimeout uses milliseconds)

  setTimeout(function () {
    console.log(message);
    alert(`${message} after ${seconds} seconds`);
  }, seconds * 1000);
}
