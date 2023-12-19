let character = {
    name:`Sonic`,
    color:`Blue`,
    speed:1000,
};

for ( let x in character){
    
    console.log(`${x} : ${character[x]}`);
    
    
}

let salaries = {
    John : 24000,
    Harry: 8700,
    Neil: 30000,
}

for(let i in salaries){
    let salary = `$${salaries[i]}`;
    console.log(`${i} earns ${salary} per year. `);
}

let character1 = {
    name:`Sonic`,
    color:`Blue`,
    speed:1000,
}

character1.name = `Leo`;
character1.segment=`General`;
delete character1.speed;

console.log(character1);

//   ### TASKS ###   //
/*
1. Create an object called house with the following properties:
   type: `Detatched`,
   build: `Brick`,
   year: 2019,
   price: 25000,
   driveway: true,

   Use the for..in loop to iterate over the properties and console
   log the properties name along with their values.

   */

//   <<< SOLUTIONS >>>   //

let house = {
   type: `Detatched`,
   build: `Brick`,
   year: 2019,
   price: 25000,
   driveway: true,
}

for ( let i in house){
console.log(`${i} : ${house[i]}`);

}
   













