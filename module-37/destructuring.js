// 1. array destructuring 

const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [52, 25];

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

console.log(boxify(90, 80));

const student = {
    name: 'mokless',
    subject: 'bangla',
    age: 25,
    movies: ['king khan', 'password']
}


const [firstMovies, secondMovies] = student.movies;



// object destructuring

// const {name, age} = {name: 'alu', age: 14};
const { name, age } = { name: 'kudduc', address: 'noakhali', age: 25 }



const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['Html', 'css', 'js'],
    specification: {
        height: 66,
        weidth: 55,
        address: 'mucir kona',
        drink: 'water',
        watch: {
            name: 'rolex',
            brand: 'apple'
        }
    }
}

const { machine, ide } = employee;
const { weidth, address } = employee?.specification;
const {brand} = employee?.specification?.watch