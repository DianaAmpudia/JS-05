let userName = prompt("What is your name?");
let ageInput = prompt("What is your age?");
let age = parseInt(ageInput);
//The split() method looks for the comma character (",") in the string and uses those commas 
//as separators to divide the string and it creates an array containing those substrings
let favoriteMovies = prompt(
  "Enter your favorite movies separated by comma (,):"
).split(",");

//Save the user data in an object
let userData = {
  name: userName,
  age: age,
  favoriteMovies: favoriteMovies,
};

//Function to select a random favorite movie
function getRandomMovie(movies) {
  //Math.random() generates a random number between 0 and 1 and movies.length gives us the number of movies in the array. Multiplying these gives a random number between 0 and the number of movies.
  //Math.floor()rounds down the random number to the nearest integer. This ensures we get a number that can be used as an array index.
  let randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return console.log(`The film ${randomMovie} is one of my favorites`);
}

//Showcase the user data in the console
console.log(`Name: ${userData.name}`);
console.log(`Age: ${userData.age}`);
console.log(`Favorite Movies: ${userData.favoriteMovies}`);
getRandomMovie(userData.favoriteMovies);
