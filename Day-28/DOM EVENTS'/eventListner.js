













// Calling event listen target to call the function to perfornm
// tasks as instructed.


let button = document.querySelector('#btn');
let heading = document.querySelector('#heading');

button.addEventListener('click', function(){
    console.log('Button Click');
    heading.style.color = 'Purple';
    heading.style.fontSize = '80px';



})