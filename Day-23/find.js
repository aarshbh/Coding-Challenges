// Consoles the value if exists , else return 'undefined'

let names = ['HARRY','NARSH','RAHUL','JAY'];

let findNames = names.find(
    function (value) {
        return value === 'JAY';
    }
);
console.log(findNames);

// Findindex() method

let Findindex = names.findIndex(
    function (value){
        return value === 'RAHUL'
    }
);
console.log(Findindex);


//   ### TASKS ###   //
/*
1. Loop through the array using the forEach() method to 
   alert each item including the index number,eg '0 - apple' '1 - orange' etc.

2. Create a new array using the relevent iteration method that takes the 
   fruits and sets them to uppercase.

3. Use the right iteration method to check to see if each fruit contain
   more than three letters, console log the boolean result.
   */
  
//   <<< SOLUTIONS >>>   //

 let fruits = ['APPLE','BANANA','ORANGE','GOVAVA','BLUE-BERRY'];
// let newFruits = fruits.forEach(
//     function (value,index){
//         alert(`${index}-${value}`);
//     }
// );
// console.log(newFruits);

let fruitCap = fruits.map(
    function (v,i,a) {
        return v.toUpperCase();
    }
);
console.log("2. ",fruitCap);

let onlyThreeletters = fruits.every(
    function (val){
        return val.length > 3;
    }
);
console.log(onlyThreeletters);




