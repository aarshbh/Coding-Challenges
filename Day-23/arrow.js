//   ### TASKS ###   //
/*
1. Rewrite the following function as an arrow function:
   function user(name){
    return `My name is ${name}`
   }
2. Rewrite the following function as an arrow function:
   const greeting = function(){
    return console.log(`Hello, how are you?`);
   }   

*/
const user = (name) => {
    return `My name is ${name}`;
}    ;
console.log("1. ",user("DEV"));

const greeting = name => `How are you? `;
console.log("2. ",greeting());




