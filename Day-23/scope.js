//   ### TASKS ###   //
/*
1. Create three variables, add a function that logs them to the console in
   the following format e.g. 'John smith is 25 years old'.
   
2. Move the variable into the local scope of the function and add another
   variable this time called country '... and lives in England'.
   
3. Outside of the function chnange name to 'James',did problem encountered.
*/

//   <<< SOLUTIONS >>>   //
let firstName='JOHN';
let lastName='SMITH';
let age=25;
function logInfo() {

  console.log(`${firstName} ${lastName} is ${age} years old`);
}
logInfo();

function addCountry() {
    let FirstName='JOHN';
let lastName='SMITH';
let age=25;
let country='ENGLAND';
console.log(`${firstName} ${lastName} is ${age} years old and lives in  ${country}`);

    
};
let FirstName = 'JAMES';

addCountry();
