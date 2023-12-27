// Creatying costum elements, class , images etc..
// Append saves the elements in the last.

let heading = document.createElement('h1');
console.log(heading);
heading.innerHTML = 'JavaScript is awsome';
let parent = document.querySelector('.parent');
heading.classList.add('append');

parent.appendChild(heading);  // Append method that saves the createdElements after the target element.

let subHeading = document.createElement('h3');
subHeading.innerHTML = 'Web Dev is Awsome';
heading.insertAdjacentElement('beforebegin',subHeading)  // insertAdjecentElements sets the rules for console the command with respect to targetElent.

