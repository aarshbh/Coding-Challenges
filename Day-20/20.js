let supers = "Superman, batman, Flash, Ironman, Hulk, Thor";
let superArray = supers.split(', ');
console.log(superArray);

let heros = ['Superman', 'Batman' , 'Ironman', 'Hulk', 'Thor', 'Captain America'];
let newhero = heros.slice(2,4)
console.log(newhero);

heros.splice(2, 1, 'Green Lantern');
console.log(heros);

heros.splice(3, 0 , 'Wonder Women');
console.log(heros);