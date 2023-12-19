//   ### TASKS ###   //
/*
1. Create an array of any three contries . Add
   an extra country in index number 3, 
   console log the list.

2. Create a multi-dimentional array of colours in the top 
   level of the array, add three colours in the second level
   .Access the last colour in the second level, and console
   log the result.
   
*/

//   <<< SOLUTIONS >>>   //

let countries = ["USA", "Canada", "Mexico"];
countries[3] = "BRAZIL";
console.log(countries);

let colour = [`RED`,`BLUE`,[`YELLOW`,`VOILET`,`NEON`]];
console.log(colour[2][2]);