//$ NAME : "abdulrehman"    &&   ROLL NUM :"00173430"  && DAY : SUNDAY 2 TO 5

//? 1. Install Node.js, TypeScript and VS Code on your computer.
// ~ DONE

//* -------------------------------------------------------------------------------
//? 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var person: string = "Maaz";
console.log(`Hello ${person}, would you like to learn some Javascript today?`);
//* -------------------------------------------------------------------------------
//? 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and Title_case.
let personName: string = "Maaz";

console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());
console.log(personName);
//* -------------------------------------------------------------------------------
//? 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
const quote: string = "“Win or lose, I always learn something”";
console.log("Andrew Tate's motto" + " " + quote);
//* -------------------------------------------------------------------------------
//? 5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const famousPerson: string = "Andrew Tate";
const message: string = "“Believe you can and you're halfway there..”";
console.log(`message for my favorite person ${famousPerson} that ${message}`);
//* -------------------------------------------------------------------------------
//? 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
let personName: string = "\t Abu Andrew Tate \n";
//# Print the name with whitespace
console.log("Name with whitespace: " + personName);

//# Strip the whitespace
console.log("Name without whitespace: " + personName.trim());
//* -------------------------------------------------------------------------------
//?  7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//? 8. You should create four lines that look like this:
// ADDITION
console.log(2 + 3);

// SUBTRACTION
console.log(7 - 2);

// MULTIPLICATION
console.log(5 * 1);

// DIVISION
console.log(10 / 2);
//* -------------------------------------------------------------------------------
//?9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favNumber: number = 10;

let message: string = "is anyone know my favorite number is";

console.log(message + " " + favNumber + "Ops!🙊");
//*-------------------------------------------------------------------------------------------------

//?10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

const myName: string = "Abdul Rehman";
const date: string = "1st March 2024";

console.log(`my name is ${myName} and today date is ${date}`);
//# in question 10 i make 2 variables and give values to them then i use consoloe.log() which use to print the values in the browser console . in Round Brackets / Parentheses i use backticks `` which print value as a string . then i use ${} to print the store value...
//! IMPORTANT NOTE => EVERYTHING I WRITE IN QUESTION 10 WILL NOT SHOW IN A BROWSER console AS I USE COMMENTS THAT BROWSER DOESN'T EXECUTE
//*-------------------------------------------------------------------------------------------------
//?11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const names: string[] = ["ali", "furqan", "maaz", "hadi", "tahir"];

for (let i: number = 0; i < names.length; i++) {
  console.log(names[i]);
}
//*-------------------------------------------------------------------------------------------------
//?12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const greet: string = "Hello";

for (let i: number = 0; i < names.length; i++) {
  console.log(`${greet} ${names[i]}`);
}
//*-------------------------------------------------------------------------------------------------
//?13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const transportation: string[] = ["car", "motorcycle", "bicycle"];

const features: string[] = [
  "it's comfortable",
  "for short distance",
  "for fitness",
];

for (let i: number = 0; i < transportation.length; i++) {
  console.log(
    `I would like to own a ${transportation[i]} because ${features[i]}`
  );
}
//*-------------------------------------------------------------------------------------------------
//?14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guests: string[] = ["ali", "furqan", "maaz", "hadi", "tahir"];

for (let i: number = 0; i < guests.length; i++) {
  console.log(`I would like to invite ${guests[i]} to dinner.`);
}
//*-------------------------------------------------------------------------------------------------
//?15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//# Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

const guests: string[] = ["John", "Alice", "Bob", "Charlie"];
console.log(`In changing guest list ${guests[2]} will not come but zaid will`);
guests.splice(2, 1, "zaid");
console.log(`The updated guest list is: ${guests}`);

console.log(`I would like to invite ${guests} to dinner.`);
//*-------------------------------------------------------------------------------------------------
//?16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
const guests: string[] = ["saqib", "osman", "zain"];

console.log(
  `i would like to inform to ${guests.slice(
    0,
    4
  )} that we have new guest ${guests.slice(5)}`
);

guests.unshift("khizer");
console.log(`Adding one new guest in the first => ${guests.slice(0, 1)}`);

guests.splice(3, 0, "samer");

console.log(guests);

console.log(`adding new guest in center => ${guests[3]}`);

guests.push("mujahid");

console.log(`adding new guest in end => ${guests[10]}`);

for (let i = 0; i < guests.length; i++) {
  console.log(
    `this is the last invitation message finally 😅 \n please ${guests[i]} come to the dinner`
  );
}

const guests: string[] = ["Alice", "Bob", "Charlie", "Dave", "Eve"];

console.log(
  `Sorry to inform you that I can invite only two people for dinner.`
);

for (let i = guests.length - 1; i >= 2; i--) {
  console.log(`Sorry, but you ${guests[i]} can't come for dinner.`);
  guests.pop();
}

console.log(`Remaining --> ${guests}`);

for (let i = 0; i < 2; i++) {
  console.log(`You are lucky because you are invited ${guests[i]}.`);
}

guests.splice(0);

console.log(
  `After the dinner party, no one is left, so my array becomes ${guests.length}.`
);
//*-------------------------------------------------------------------------------------------------

//?19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log(
  `The number of people that are invited for dinner are ${guests.length}`
);
//*-------------------------------------------------------------------------------------------------
//?18. Seeing the World: Think of at least five places in the world you’d like to visit. Store the locations in a array. Make sure the array is not in alphabetical order.

const locations: string[] = [
  "karachi",
  "islamabad",
  "qatar",
  "dubai",
  "los angles",
];
console.log(locations);

const sortedLocations: string[] = [...locations].sort();
console.log(sortedLocations);

//*-------------------------------------------------------------------------------------------------

//? 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const random: string[] = ["a", "b", "c", "d", "e", "f"];

console.log(random);
//*-------------------------------------------------------------------------------------------------

//? / 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const obj: {
  city: string;
  favFood: string;
  color: string;
} = {
  city: "karachi",
  favFood: "biryani",
  color: "green",
};

console.log(obj);
//*-------------------------------------------------------------------------------------------------
//? 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.
let indexError: string[] = ["a", "b", "c", "d"];

console.log(indexError[5]);
//*-------------------------------------------------------------------------------------------------
// //?23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//# let car = 'subaru';
//# console.log("Is car == 'subaru'? I predict True.")
//# console.log(car == 'subaru')
//# Look closely at your results, and make sure you understand why each line evaluates to True or False.
let num1: number = 10;
let num2: number = 20;

console.log(`i predict ${num1 < num2} => true`);
console.log(`i predict ${num1 > num2} => false`);
//*-------------------------------------------------------------------------------------------------
//?  24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//# Tests for equality and inequality with strings
let str1: string = "hello";
let str2: string = "world";
let str3: string = "hello";
let str4: string = "Hello";

//# Test for equality with strings
console.log(`I predict ${str1 === str2} => false `);
console.log(`str1 is equal to str2: ${str1 === str2}`);

console.log(`I predict ${str1 === str3} => true `);
console.log(`str1 is equal to str3: ${str1 === str3}`);

//# Test for inequality with strings
console.log(`I predict ${str1 !== str2} => true `);
console.log(`str1 is not equal to str2: ${str1 !== str2}`);

console.log(`I predict ${str1 !== str3} => false `);
console.log(`str1 is not equal to str3: ${str1 !== str3}`);

//# Tests using the lower case function

console.log(`i predict ${str3 !== str4} => false`);

// # Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num01: number = 5;
let num02: number = 15;
let num03: number = 10;
let num04: number = 5;

//@ equality
console.log(`i predict ${num01 === num04} ==> true`);
console.log(`i predict ${num02 > num03} ==> true`);
console.log(`i predict ${num03 > num01} ==> true`);

//@ inequality

console.log(`i predict ${num01 !== num04} ==> false`);
console.log(`i predict ${num01 !== num03} ==> true`);

//# Tests using "and" and "or" operators
//@ AND ==> &&
console.log(`i predict ${num01 <= num02 && num01 >= num02} ==> false`);
console.log(`i predict ${num01 <= num02 && num02 >= num03} ==> false`);
console.log(`i predict ${num01 === num04 && num02 >= num03} ==> true`);
console.log(`i predict ${num01 <= num02 && num02 >= num03} ==> true`);
console.log(`i predict ${num01 === num04 && num01 > num02} ==> false`);

//@ OR ==> ||

console.log(`i predict ${num01 <= num02 || num02 >= num03} ==> TRUE`);
console.log(`i predict ${num01 === num04 || num01 > num02} ==> TRUE`);
console.log(`i predict ${num01 <= num02 || num01 >= num02} ==> TRUE`);
console.log(`i predict ${num01 <= num02 || num01 >= num03} ==> TRUE`);

// # Test whether an item is in a array

let pets: string[] = ["cats", "dogs", "lion", "wolf"];
console.log(pets);
console.log(`if this is an array it shows true \n${pets.includes("cats")}`);
console.log(`if this is an array it shows false \n${pets.includes("wolf")}`);
console.log(
  `if this is an array but not having the exact value it shows false \n${pets.includes(
    "elephant"
  )}`
);
//*-------------------------------------------------------------------------------------------------
//? 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color: string = "green";

if (alien_color === "green") {
  console.log("You earned 5 points");
} else {
  console.log("You didn't earn 5 points");
}

if (alien_color === "green") {
  console.log("This test will pass");
}
//*-------------------------------------------------------------------------------------------------
//? 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//# If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien. • If the alien’s color isn’t green, print a statement that the player just earned 10 points.• Write one version of this program that runs the if block and another that runs the else block.

let alienColor: string;

if (alienColor === "green") {
  console.log("you earn 5 points");
} else {
  console.log("you earn 10 points");
}

//*-------------------------------------------------------------------------------------------------
//? 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//#• Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienNewColor: string = "red";
// # If the alien is green, print a message that the player earned 5 points.

if (alienNewColor === "green") {
  console.log("you earned 5 points");
}
// # If the alien is yellow, print a message that the player earned 10 points.
else if (alienNewColor === "yellow") {
  console.log("you earned 10 points");
}
// # If the alien is red, print a message that the player earned 15 points.
else if (alienNewColor === "red") {
  console.log("you earned 15 points");
}
//*-------------------------------------------------------------------------------------------------
//?28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// # If the person is less than 2 years old, print a message that the person is a baby.
let age: number = 2;

if (age <= 2) {
  console.log("you are a baby");
} else if (age >= 2 && age <= 18) {
  console.log("you are a teenager");
} else if (age > 18 && age <= 45) {
  console.log("you are an adult");
} else if (age > 45) {
  console.log("you are old");
}
//*-------------------------------------------------------------------------------------------------
//?29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.• Make a array of your three favorite fruits and call it favorite_fruits.• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favoriteFruits: string[] = [
  "bananas",
  "oranges",
  "apples",
  "mangoes",
  "pears",
];

if (favoriteFruits.includes("bananas")) {
  console.log("You really like bananas!" + " " + favoriteFruits[0]);
} else if (favoriteFruits.includes("orange")) {
  console.log(`i know you don't like orange ${favoriteFruits[1]} are in list`);
} else if (favoriteFruits.includes("strawberry")) {
  console.log("strawberry milks shake is best but strawberry is not in list");
} else if (favoriteFruits.includes("mangoes")) {
  console.log(`mangoes are delicious and ${favoriteFruits[3]} are in list`);
} else if (favoriteFruits.includes("pears")) {
  console.log("i like pears and" + favoriteFruits[4] + " is in list");
}
//*-------------------------------------------------------------------------------------------------
//?30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?• Otherwise, print a generic greeting, such as Hello Eric, thank yu for logging in again*/
let greeting: string[] = ["admin", "maaz", "saqib", "hadi", "tahir"];

let userInput: string | null = prompt("Enter your username");

while (userInput && greeting.includes(userInput)) {
  console.log("Hello admin, would you like to see a status report?•");
  break;
}

console.log(`Hello ${userInput}!`);

// ----------------------------------------//

for (let i: number = 0; i < greeting.length; i++) {
  if (userInput === "admin") {
    console.log("Hello admin, would you like to see a status report?•");
    break;
  } else {
    console.log(`hello ${userInput}`);
  }
}
//*-------------------------------------------------------------------------------------------------
// ? 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. • If the list is empty, print the message We need to find some users! • Remove all of the usernames from your array, and make sure the correct message is printed.
if (user === 0) {
  console.log("We need to find some users!");
}
//*-------------------------------------------------------------------------------------------------
//? 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.• Make a list of five or more usernames called current_users.• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available. • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let currentUserName: string[] = ["saqib", "maaz", "zain", "hadi", "tahir"];

let newUserName: string[] = ["Saqib", "maaz", "zain", "Ali", "Tahir"];

for (let i: number = 0; i < newUserName.length; i++) {
  if (currentUserName[i] === newUserName[i].toLowerCase()) {
    console.log(`username ${currentUserName[i]} is not available`);
  } else {
    console.log("you can use this");
  }
}
//*-------------------------------------------------------------------------------------------------

//? 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.• Store the numbers 1 through 9 in a array.• Loop through the array.• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinal: string;
for (let i: number = 1; i <= numbers.length; i++) {
  if (i === 1) {
    console.log(i + "st");
  } else if (i === 2) {
    console.log(i + "nd");
  } else if (i === 3) {
    console.log(i + "rd");
  } else {
    console.log(i + "th");
  }
  //# or
  // if (i === 1) {
  //   ordinal = "st";
  // } else if(i === 2) {
  //   ordinal = "nd";
  // }else if (i === 3){
  //   ordinal = "rd";
  // }else{
  //   ordinal = "th";
  // }
  // console.log(i + ordinal);
}
//*-------------------------------------------------------------------------------------------------
//? 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let favPizza: string[] = ["BBQ pizza", "fajita pizza", "cheese pizza"];
let reason: string;
for (let i: number = 0; i < favPizza.length; i++) {
  console.log(favPizza[i]);
}

for (let i: number = 0; i < favPizza.length; i++) {
  if (favPizza[i] === "BBQ pizza") {
    reason = "i like because of it's spice";
  } else if (favPizza[i] === "fajita pizza") {
    reason = "i like because of it's flavour";
  } else if (favPizza[i] === "cheese pizza") {
    reason = "i like because of it's cheese";
  }
  console.log(favPizza[i] + ": " + reason);
}

console.log(
  `I want someone to look at me the same way I look at pizza. Specially these flavours ${favPizza} are love.`
);
//*-------------------------------------------------------------------------------------------------
// ? 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let favAnimal: string[] = ["dog", "cat", "wolf"];
let statement: string;
for (let i: number = 0; i < favAnimal.length; i++) {
  console.log(favAnimal);
}

for (let i: number = 0; i < favAnimal.length; i++) {
  if (favAnimal[0]) {
    statement = "do speak, but only to those who know how to listen.";
  } else if (favAnimal[1]) {
    statement = "Time spent with cats is never wasted.";
  } else if (favAnimal[2]) {
    statement =
      "The lion and tiger maybe powerful, but the wolf doesn't perform circus";
  }
  console.log(`quote for ${favAnimal[i]} ==> ${statement}`);
}

console.log(`All ${favAnimal} are look cute and fluffy`);
//*-------------------------------------------------------------------------------------------------
// $ Function

//?36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size: string = "medium", message: string = "extra"): void {
  console.log(`A ${size} shirt with a ${message}`);
}
makeShirt("large", "Lone Wolf");
//*-------------------------------------------------------------------------------------------------
// ? 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(
  size: string = "large",
  message: string = "i love TypeScript"
): void {
  console.log(`A ${size} shirt with a ${message}`);
}
makeShirt("large", "Lone Wolf");
makeShirt("medium", "I love TypeScript");
//*-------------------------------------------------------------------------------------------------
//? 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.Call your function for three different cities, at least one of which is not in the default country.
function describe_city(
  country: string = "pakistan",
  city: string = "karachi"
): void {
  console.log(`A country ${country} have a beautiful city name ${city}`);
}
describe_city();
describe_city("peshawer", "pakistan");
describe_city("queeta", "pakistan");
//*-------------------------------------------------------------------------------------------------
// ? 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(
  city: string = "karachi",
  country: string = "pakistan"
): void {
  console.log(`${city} ${country}`);
}

city_country();
city_country("lahore", "pakistan");
city_country("peshawer", "pakistan");
//*-------------------------------------------------------------------------------------------------
//? 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

const make_album = (
  artistName: string,
  albumTitle: string,
  numTracks: number = 0
) => {
  return {
    artistName: artistName,
    albumTitle: albumTitle,
    numTracks: numTracks,
  };
};

let album1 = make_album("Meher Zain", "ABC", 10);
console.log(album1);

let album2 = make_album("Sami Yousuf", "XYZ");
console.log(album2);

let album3 = make_album("Sahil Adeem", "UVW", 15);
console.log(album3);
//*-------------------------------------------------------------------------------------------------
// ? 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians: string[] = ["A", "B", "C", "D", "E"];

function showMagicians(magicians: string[]): void {
  for (let i: number = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

showMagicians(magicians);
//*-------------------------------------------------------------------------------------------------
//? 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(great: string): void {
    const magicians: string[] = ["Harry", "Hermione", "Ron"];
    for (let i: number = 0; i < magicians.length; i++) {
      console.log(`${magicians[i]} ${great}`);
    }
  }
  make_great("great");
  //*-------------------------------------------------------------------------------------------------
// ? 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// ? 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
make_great(magicians.splice(2,1,"true","change"))
console.log(magicians);
//# Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

showMagicians(magicians);
make_great("great");
//*-------------------------------------------------------------------------------------------------
//? 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
const Sandwiches = (names: string[]) => {
    for (let i = 0; i < 3; i++) {
      const sandwich = prompt("Order your sandwich");
      console.log(sandwich);
    }
 };
 
 Sandwiches([]);
 //*-------------------------------------------------------------------------------------------------
//?45. Cars: Write a function that stores information about a car in a Object.The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.  Print the Object that’s returned to make sure all the information was stored correctly.
const makeCar = (manufacturer: string, model: string, color: string = "white", features: string[] = []) => {
    return {
      manufacturer: manufacturer,
      model: model,
      color: color,
      features: features
    };
  };
  
  const car1 = makeCar("Toyota", "Corolla", "red", ["Bluetooth", "USB"]);
  console.log(car1);
  
  const car2 = makeCar("BMW", "X5", "black", ["Navigation", "Leather Seats"]);
  console.log(car2);