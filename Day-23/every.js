// Every() method checks condition for all elemnts, 
// returns true value when all condition satisfies.

let numbers = [1,4,6,8,2,56];
let newNumber = numbers.every(
    function (value) {
        return value < 60 ;
    }
);
console.log(newNumber);