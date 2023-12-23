//   ### TASKS ###   //
/*
1. Create a function called favNum and set it up with a parameter called
   num, use return to return whatever number is given as the argument, 
   log this to the console with the message 'My fav number is [num]' using
   templet literals.

2. What will the following code return ?
*/

//   <<< SOLUTIONS >>>   //

function favNum(num){
return num;
};
console.log(`1. My fav number is ${favNum(6)}`);

function password(a) {
    if (a.length > 8) {
        console.log(`2. You choose ${a}`);
    }
    else{
        console.log("2. Not enough letters");
    }
};

password('PurpleRhinoi123');
password('Circle77');



