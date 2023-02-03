/*
var, keyword to create declares a new variable
name of the variable is using camel casing
= is assignment operator 
*/

var favoriteFood = 'pizza'

var numOfSlices = 8

console.log(favoriteFood)

console.log(numOfSlices)

/*
let keword signals the variable can be 
reassigned a different value 
using let can declare a vairable without assigning the variable value
*/
let changeMe = true

changeMe = false

console.log(changeMe)

/*
const keyword cannot reassigned because it is constant
reassign const will get TypeError
*/


/*
using let keyword to accomplish mathematics 
*/
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp+=5
powerLevel -=100
multiplyMe *=11
quarterMe /=4

/*
string concatenation with variables
*/

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'



// string interpolation
/*
template literal is wrapped by `
inside the template literal, you will see placeholder
${mypet}, value of mypet inserted into template literal
*/
var myName = "Ronglin";
var myCity = "NY";
console.log(`My name is ${myName}.My favorite city is ${myCity}.`)

// typeof operator 
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean