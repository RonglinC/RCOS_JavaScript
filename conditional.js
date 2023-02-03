let sale = true;

if (sale){
  console.log('Time to buy!')
}


let hungerLevel = 7;

if(hungerLevel >7){
  console.log('Time to eat!')
}
else{
  console.log('We can eat later!')
}

// checking if two things are true:
if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }

// only care either condition being true
if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
  } else {
    console.log('Do some work.');
  }

//  short-circuit
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'
console.log(`The ${writingUtensil} is mightier than the sword.`);


//ternary operator 
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// same as 
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');