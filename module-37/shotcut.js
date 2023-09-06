//  'alams', 5, true, {}, []

// '', 0, false, null, undefined;


// check truthy

let myVar = 5;
if (myVar) {
    myVar = myVar + 50
}
else {
    myVar = 0;
}

let money = 50;

let food;

if (money > 100) {
    food = 'biriani'
}
else {
    food = 'cha biscuit'
}



// ternary operator

let food1 = money > 100 ? 'biriany' : 'cha biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'water';
console.log(drink);

// number to string conversion

const num1 = 25;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number 


const input = '500';
const inputNum = +input;
console.log(inputNum);




const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed

isActive && showUser();


//  use || if the left side is false then right side will be executed 

isActive || hideUser();

// toggle boolean

isActive = !isActive;