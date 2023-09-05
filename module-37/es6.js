const numbers = [20, 85, 83, 22];

const student = {
    name: 'mokless',
    subject: 'bangla',
    roll: 25,
    movies: ['king khan', 'password']
}

//1. template string

const about = `my name is ${student.name} my roll number ${student.roll} my movies name ${movies[0]}`
console.log(about);

// 2. arrow function 

const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (a, b, c) => a+ b+ c;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}

// spread operator

const newNumbers = [...numbers];

// crate a new array from an array from an older array and add  an element

const currentNumbers = [...numbers, 55];

numbers.push(99)
numbers.push(99)
numbers.push(99)

console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)
