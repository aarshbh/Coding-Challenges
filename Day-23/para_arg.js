//   ### TASKS ###   //
/*
1. Create a function called favFood() and use `response` as a parameter
   ,console log for eg. "Your favourite food is Pizza."

2. Invoke the function with your fav food as the argument.

3. Update the function to add a default value of "empty ,please
    add your fav food". Test out the default value.

4. Finally, update the function once more to display the message 
   "Please enter your favourite food!", if their is no response added.
*/

//   <<< SOLUTIONS >>>   //

function favFood(response) {

   if (response === undefined) {
    console.error("Emply!, please add your favourite food.");
   }
   else{
     console.log(`Your favourite food is ${response}`);
   }
};

favFood("Burger");
favFood();




   