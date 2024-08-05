// ==== PALINDROME ====
let input = prompt("Enter a word or sentence:");

function isPalindrome(text) {
  // It removes all characters that are not letters or numbers using a regular expression* and converts it to lowercase
  let alphanumericText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compares if the string is the same forwards and backwards: split('') breaks the string
  //into individual characters, reverse() flips the order of those characters and join('') puts the characters back into a string.

  // If the original cleaned string is the same as the reversed version, it returns true. Otherwise, it returns false
  return alphanumericText === alphanumericText.split("").reverse().join("");
}

let result = isPalindrome(input);

if (result) {
  alert("It's a palindrome! :)");
} else {
  alert("It's not a palindrome :(");
}

/*
Regular expression explanation:
/ = These slashes denote the beginning and end of the regular expression.
[]: Square brackets define a character set. It means "match any single character in this set".
^: When placed at the start of a character set, it means "not". So this regex will match any character that is NOT in the following set
a-z: This represents all lowercase letters from 'a' to 'z'.
A-Z: This represents all uppercase letters from 'A' to 'Z'.
0-9: This represents all digits from 0 to 9.
]/g: The closing square bracket ends the character set. The g flag at the end means "global" - it tells the regex to replace all occurrences, not just the first one it finds.

"Find any character that is not a lowercase letter, uppercase letter, or digit, and do this globally (for all occurrences in the string)."
*/
