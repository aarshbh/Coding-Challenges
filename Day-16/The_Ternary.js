//   ### TASKS ###   //
/*
1. Re-write the following if else statements as a Ternary Operator:

     let message = ' ';
     if (1>10{
     message = 'Condition is true'
     }  
     else{
      message = 'Condition is false'
     };

2. Assign the value '12:00' to a variable called time, and create a 
   ternary operator to console log 'Good Morning' or 'Good Evening' depending on the time.

*/

//   <<< SOLUTIONS >>>   //
let message = '';
let result = (1>10) ? '1. Condition is TRUE' : '1. Condition is FALSE';
console.log(result);

let time = '12:00'
let resultant = (time <= '12:00') ? '2. Good Morning' : '2. Good Evening';
console.log(resultant); 