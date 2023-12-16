//   ### TASKS ###   //
/*
1. Create a variable called favfood and set the value to fav food.
   Create a switch case statements with four foods as cases,
   and another one that matches favFood, so we're looking
   for five cases in total. For each case log "That's
   right ! ( favFood ) is my favourite! ". Think about how to pull
   the favFood variable in. Finally add a default case that
   says "favFood not found...I'm hungry"
   */

let favFood = `Nachos`;
switch (favFood) {
  case `Nachos`:
    console.log(`That's right! ${favFood} is my favourite`);
    break;

  case `bread`:
    console.log(`That's right! ${favFood} is my favourite`);
    break;

  case `Pumpkin`:
    console.log(`That's right! ${favFood} is my favourite`);
    break;

  case `Beetroot`:
    console.log(`That's right! ${favFood} is my favourite`);
    break;

  case `salad`:
    console.log(`That's right! ${favFood} is my favourite`);
    break;
  default:
    console.log(`${favfood} not found...I'm hungry`);
}
