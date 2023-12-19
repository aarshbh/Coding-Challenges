/* Two methods are used to remove elements in an array,
   "pop" or "shift".
   */
let supers = ["SUPERMAN", "BATMAN", "FLASH", "AQUAMAN"];
// Method 1: Using pop() method.
console.log(supers.pop());
//Method 2: using shift() methos
console.log(supers.shift());
console.log(supers);
/* Two methods to push an element in an array,
   "push()" or "unshift()"
   */
let games = ["GTA", "MARIO", "COD", "CS-GO"];
console.log(games);
//Using push() method
games.push("CONTRA");
console.log(games);
// Using second method unshift()
games.unshift("GOD OF WAR");
console.log(games);
// USING CONCATINATION TO ADD ARRAYS
let sports = ["BASKETBALL", "HOCKEY", "FOOTBALL"];
console.log(sports);
console.log("Concatination of arrays:");
let olderSports = ["GILLI-DANDA", "KUSHTI"];
let newSports = sports
  .concat(["CRICKET", "KABBADI", "KHO-KHO"])
  .concat(olderSports);
console.log(newSports);
console.log(sports.join('|'));