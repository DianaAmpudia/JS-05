// This line asks the user to enter a number and stores it in the variable n. The parseInt function converts the input to an integer.
let n = parseInt(prompt("Enter a non-negative integer to calculate its factorial:")
);

function factorial(n) {
  // Base case. If the number is 0 or 1, it returns 1 because the factorial of 0 and 1 is 1.
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case. For numbers greater than 1, it multiplies n by the factorial of n-1
  //This function calls itself until it reaches the base case
  return n * factorial(n - 1);
}

//This checks if the user's input is valid
if (n >= 0) {
  let result = factorial(n);
  alert(`The factorial of ${n} is ${result}`);
  console.log(`The factorial of ${n} is ${result}`)
} else {
  alert("Please enter a non-negative integer.");
}
