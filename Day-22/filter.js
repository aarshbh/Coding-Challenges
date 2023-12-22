let numbers = [1,2,3,4,5,6,7,8,9,10];

let newNumber = numbers.filter(
    function (value,index,array) {
        return value % 2 === 0;
    }
);

console.log(newNumber);

