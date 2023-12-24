///   ### TASKS ###   //
/*
1. Create an array of three colours and use the spread operator to copy 
   these into a new array along with three new colours, console log the
   new array.

2. What will happen to our new array if we used the pop() method on our
   original array.
   
3. Create a copy of the folowing objects, add a new property to 
   occupation and ensure the copied array contains all the information.
   
   const user = {
    name : 'John',
    age : '25',
    occupation: {
        role: 'Developer',
    }
   }

4. Create an array with the values: 'Jumanji', 1995. Create a function
   that logs 'The movie Jumanji was released in 1995' with the Spread
    operator.
    */

//   <<< SOLUTIONS >>>   //
const colour = ["RED", "BLUE", "GREEN"];

const newColours = [...colour, "VOILET", "BLACK", "WHITE"];
console.log("1. ", newColours);
colour.pop();
console.log(
  "2. No change in pop() after declaration and initialization of new array"
);

const user = {
  name: "John",
  age: "25",
  occupation: {
    role: "Developer",
  },
};

const newUser = {
    ...user,
    occupation:{
        ...user.occupation,
        employee: 'GOOGLE',
    }
}
console.log("3. ",newUser);
 const array = ['JUMANJI',1995];

 function movie(name,year) {
    return console.log(`4. The movie ${name} was released in ${year}`);
 }
 movie(...array);

