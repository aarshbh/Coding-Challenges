let course = "JavaScript is cool";
let course1 = "    JavaScript is cool  ";
let course2 = "JavaScript is not cool";
console.log("1. "+course.length);
console.log("2. "+course.charAt(4));
console.log("3. "+course.toLocaleLowerCase());
console.log("4. "+course.toUpperCase());
console.log("5. "+course.indexOf("p"));
console.log("6. "+course.lastIndexOf("o"));
console.log("7. "+course.slice(0,10));
console.log("8. "+course1.trim());
console.log(course2.replace("not","so"));

//   ### TASKS ###   ///
/*
1. Create a variable called x and assign the value i am watching Dev
   Dreamer. Use the relevent string method to change the entire 
   sentence to upper case and use console.log() to display this.
   
2. Use the right string method to extract the channel name "Dev Dreamer"
   and log this to the console.   
   */
  
//   <<< SOLUTIONS >>>   //

let x = "I am watching Dev Dreamer";
console.log("\n\n SOLUTIONS\n\n 1. "+x.toUpperCase());

console.log(" 2. "+x.slice(14,25));