/*Some() method is a boolean value thrower, 
some() method returns true if at least one element in the
 array satisfies the provided condition, and false otherwise. */

 let number = [3,6,18];

let highNumber = number.some(
    function (value) {
        return value > 10;
    }
);
console.log(highNumber);

