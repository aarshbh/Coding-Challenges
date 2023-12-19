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