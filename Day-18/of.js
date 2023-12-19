let character = [`SONIC`,`BLUE`,`MARIO`,`LAUGI`,`HARRIS`];

for(x of character){
    if(x===`LAUGI`){
        break;
    }else{
console.log(x);
    }
}

let character1 = `COMPITIONS`;
for (i of character1){
console.log(i);
}

//   ### TASKS ###   //
/*
1. Create a List of Colors:`Red`,`Orange`,`Yellow`,`Green`,`Blue` 
   and iterate over them by using the for ..of loop.
   Log the result to the console.

2. Use a break to only show red , orange and yellow. 
    So break out the loop once we get to green.

    */

let color = [`Red`,`Orange`,`Yellow`,`Green`,`Blue`]    ;
for(c of color) {
console.log(c);

}

for( d of color){
if( d === `Green`){
    break;
}else{
    console.log(d);
}
}