let highestNumber = Number(prompt("Enter number 1:"));

//A loop to ask for the remaining 9 numbers and compare each new number to the current highest.
for (let i = 2; i <= 10; i++) {
  let num = Number(prompt(`Enter number ${i}:`));
  if (num > highestNumber) {
    highestNumber = num;
  }
}

// show the result using an alert
alert("The highest number is: " + highestNumber);
