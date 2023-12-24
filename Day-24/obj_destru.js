// Object Destructure

const game = {
  title: "Donkey Kong Country",
  platform: "SNES",
  year: 1994,
};

let { title, platform, year: release } = game;
console.log(title, platform, release);

// Object In Object
const game1 = {
  title1: "Donkey Kong Country",
  platform1: "SNES",
  year1: 1994,
  characters: {
    main: "Donkey Kong",
    side: "Diddy Kong",
    boss: "Rico",
  },
};

let {
  title1,
  platform1,
  year1,
  characters,    // This is destructuring.
  characters: { main, side, boss },
} = game1;
console.log(year1,main,side,boss);
console.log(characters);

