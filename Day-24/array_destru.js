//   Array Destructuring
// With Nested Array
let book = [
  "Harry Potter",
  "JK ROWLING",
  "2000",
  ["Shift", "Puzzle", "Tirian"],
];

let [title, author, year, [a, b, c]] = book;
console.log(title, year);

console.log(a, b, c);

//   ### TASKS ###   //
/*
1. Create an object called 'user' with the following properties:
   firstName, country. Add s nested object called todos and add 
   a few todos with the number property names for e.g.
    
   1. 'Do the shopping.'
   2. 'Play some games',

   Use the Destruncturing Assignment to destruncture all these objects
   properties (including the nested todos object) and simply log to the
   console.

2. Create an array with a list of any value (e.g. books, films etc..),
   and use the destructuring assignment to destructuring these values
   , log to the console.
   
3. Add a nested array with any three values, and add this to the 
   destructuring whislt skipping the second value. Log your 
   destructured array value to the console.
   */

//   <<< SOLUTIONS >>>   //

let details = {
  firstName: "Rahul",
  country: "Bharat",
  todos: {
    firsts: "Do the shopping",
    second: "play some games",
  },
};
let {
  firstName,
  country,
  todos,
  todos: { firsts, second },
} = details;

console.log("1. ", firstName, country, firsts, second);

let books = ["CharakSahitya", "Charak", "100 CE"];
let [x, y, z] = books;
console.log("2. ", x, y, z);

let writters = [
  "CharakSahitya",
  "Charak",
  "100 CE",
  ["Ramayan", "Defeating rawan", "Shree raam"],
];
let [p, q, n, [l, , t]] = writters;
console.log("3. ", p, q, n, l, t);
