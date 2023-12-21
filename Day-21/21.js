// Reverse //

let heros = ['Superman','Batman','Ant man','Hulk','thor','Ironaman','Vision'];

heros.reverse();
console.log(heros);

// SORTING ALPHABATICALLY

heros.sort();
console.log(heros);


//   ### TASKS ###   //
/*
1. Create an array with the following fruits: apple , orange , banana.
   Use the correct array method to add the fruits cherry and pineapple
   to the beggining of the array . Then add the fruits plum and grapes 
   to the end of the array , once again use the relevent array method.

2. replace orange with lemon using the splice() emthod.

3. Sort the value apphabatically.

*/
//   <<< SOLUTIONS >>>   //

let fruits = ['APPLE','ORANGE','BANANA'];
fruits.unshift('CHERRY','PINEAPPLE');
fruits.push('PLUM','GRAPES');
console.log('1. ',fruits);

fruits.splice(3,1,'LEMON');
console.log('2. ',fruits);

fruits.sort();
console.log('3. ', fruits);
