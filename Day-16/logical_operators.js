//   ### TASKS ###   //
/*
1. Will the result of the following be true or false */
let a = "Dev Dreamer";
let b = "";
if (a || b) {
  console.log("1. Yes, true.");
} else {
  console.log("1. false");
}

/*
2. Will the result of the following be true or false */

let c = "Dev Dreamer";
let d = "";

if (c && true && !b) {
  console.log("2. yes, true.");
} else {
  console.log("2. False");
}

/*
3. Create the following variables a= -1 , b= 1; Create an if
   statement using a logical operator(&&). Will the expression evaluate
    to true?  */

let e = -1;
let f = 1;
if (e && f) {
  console.log("3. Yes, true.");
} else {
  console.log("3. False");
}
console.log(typeof e);
