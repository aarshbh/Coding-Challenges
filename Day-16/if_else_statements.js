//   ### TASKS ###   //
/*
1. What will be the following code display in the console.
   let num = 10 + 2;
   if( num > 2 && num < 20){
    console.log("True");
   };
   else{
    console.log("False");
   };

2. Create a variabe called user and set its value to `employee`.
   Create an else statement to first check if user is equal to
   guest, if this is true console log `login Denied`, then check
   if user is equal to employee and console log `Successfully Loged In.
   `    
3. Assign your first name to a variable called myName and create
   an if statement to see if the numbers of letter to your name 
   is more than 5, if it is alert "more than 5",next check to see\
   if it is exactly 5 letters, if it is elert "Exactly 5 letters",
   if neither of these is true then alert "Less than 5 letters".   
   */

//   <<< SOLUTIONS >>>   //
let num = 10 + 2;
if (num > 2 && num < 20) {
console.log("1. True");
}
else{
    console.log("1. False");
};

let user = `employee`;
if(user === `guest`){
    console.log("2. Login Denied");
}
else if(user === `employee`){
console.log("2. Successfully Logged In");
}

let myName = `Aarsh`;
let length = myName.length;
if(length > 5){
    alert("More than 5.");
}
else if( length == 5){
    alert("Exactly 5 letters");

}
else{
    alert("Less than 5 letters");
}


const A = 10;
if(true){
    const A=500;
}
console.log(A);