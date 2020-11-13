const { favFoods } = require ('./myModules')

function printFood(array) {
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

printFood(favFoods);

const colors = require('colors');

console.log(colors.green(favFoods[0])); // outputs green text
console.log(colors.red.underline(favFoods[1])) // outputs red underlined text
console.log(colors.inverse(favFoods[2])); // inverses the color
console.log(colors.rainbow(favFoods[3])); // rainbow
console.log(colors.trap(favFoods[4])); // Drops the bass

const chalk = require('chalk')

console.log(chalk.blue('This is chalk!'));

const randomColor = require('randomcolor'); // import the script
let color = randomColor(); // a hex code for an attractive color

console.log('This generates a random hexcode: '+ color);

const beep = require('beepbeep')
 
beep(0)

beep(0)

// Wasnt working...
// import { nutriScore } from "nutri-score";
// const nutriScoreResult = nutriScore.calculateClass(
//     {
//       energy: 0,
//       fibers: 4,
//       fruit_percentage: 60,
//       proteins: 2,
//       saturated_fats: 2,
//       sodium: 500,
//       sugar: 10
//     },
//     "solid"
//   );  
//   console.log(nutriScoreResult.energy);

