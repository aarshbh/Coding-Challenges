  // It gethers the value in  form of array . 


function restParameters(...x) {
    console.log(x);
    console.log(...x);

}

restParameters(1,2,3,4,5,'Hello');


//   ### TASKS ###   //
/*
1. Create a function called colours and collate all the arguments into
   an array , and log the second colour to the console.

2. What will be the output of the following;

function heroes(a,b,...c){
    console.log(c);
    console.log(c[2]);
}
heroes('Batman','Superman', 'Spiderman','Iron Man','Wonder Woman');

3. Refactor the code in the heroes function from task 2 and pull  
   out the array value, log to the console(hint: use the spread operator)
*/
function colours(...a) {
    console.log(a);
    console.log("1. ",a[1]);
}
colours('RED,','BLUE','GREEN','VOILET');
function heroes(a,b,...c){
    console.log(c);
    console.log("2. ",c[2]);
}
heroes('Batman','Superman', 'Spiderman','Iron Man','Wonder Woman');

function heroes1(...c){
    console.log("3. ",...c);
   
}
heroes1('Batman','Superman', 'Spiderman','Iron Man','Wonder Woman');








