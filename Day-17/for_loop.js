const characters = ['Sonic ','Tailsb ','Mariob ','Luigi '];

let para = document.querySelector('p');
let info = 'The characters are ';

for(let i = 0 ; i < characters.length ; i++){
    if(i === characters.length-1){
        info += `and ${characters[i]}`;
    }
    else{
        info += `,${characters[i]}`;
    }

}

para.innerText = info;



//   ### TASKS ###   //
/*
1. Create an array of five colors, use a for loop to iterate 
   over each color with the statement :`[color] is my
    fav color! Console log the results.
    */


 //   <<< SOLUTIONS >>>   //   
 const colors = ['Red ','Blue ','Green ', 'Yellow ','Purple '];
 let result = ` is my fav color! `;

 for (let i = 0 ; i  < colors.length ; i++){
    console.log(`${colors[i]}is my fav color!`);
 }