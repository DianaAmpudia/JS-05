// ==== Flat Array ====
/* Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
Use any type of algorithm you want like callbacks, recursion, etc... */

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function flattenArray(arr) {
  // This creates an empty array to store the flattened result
  let flattened = [];

  // This loop goes through each element in the array
  for (let element of arr) {
    // If the element is an array, this line calls the flattenArray function on that
    // element (recursion) and adds the result to the flattened array.
    if (Array.isArray(element)) {
      flattened = flattened.concat(flattenArray(element));
    } else {
      //If the element is not an array, it's simply added to the flattened array.
      flattened.push(element);
    }
  }
  return flattened;
}

let result = flattenArray(multiDimension); // Output: [1, 2, 3, 4, 5, 6]
console.log(result);

/*
Aditional notes:
-concat is used to merge two or more arrays into a new array.
-The for..of loop in JavaScript allows you to iterate over iterable
    objects (arrays, sets, maps, strings etc).
-for...of uses the format:
    for (variable of iterable)
    statement
*/
