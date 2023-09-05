// 1. How to Declare a variable using let and const 
const fatherName = 'mokles';
let season = 'rainy';
season = 'winter';

// 6 basic conditions : <, >, ===, !==, <=, <=

// multiple condition : && and ||

if(fatherName === "mokles" || season === "rainy"){

}
else if(fatherName === 'kudduc'){

}
else{

}


// 3. array declare
// index, length, push
const numbers = [20, 85, 83, 22];
numbers[1] = 25;

//4. for loop

for(let i = 0; i <numbers.length; i++){
    const number = numbers[i]
    console.log(number);
}


// 5. function 
function multiply(num1, num2){
    const total = num1 * num2;
    return total;
}

const output = multiply(20, 25);
console.log(output);


// 6. object

const student = {
    name: 'mokless',
    subject: 'bangla',
    roll: 25,
    movies: ['king khan', 'password']
}

const rollNumber = student.roll;


console.log(student.name);  // direct by property
console.log(student['age']); // access via property name string
console.log(student[rollNumber])  // access via property name in variable