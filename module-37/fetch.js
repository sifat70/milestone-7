// 1. JSON

const student = {
    name: 'mokless',
    subject: 'bangla',
    age: 25,
    movies: ['king khan', 'password']
}


const studentJson = JSON.stringify(student);
// console.log(student);
// console.log(studentJson);

const studentObj = JSON.parse(studentJson);
// console.log(studentJson);

// 2. fetch

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));



// keys values 

const keys = Object.keys(student);
const value = Object.values(student);


// for 

const numbers = [20, 17, 85, 98, 5];

numbers.forEach(num => console.log(num));

numbers.map(num => num*2)


// for of an array like object 

// loop of an object using  for in 



// add or remove for an array 


const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'iphone', price: 9200, brand: 'mac', color: 'gold'},
    {name: 'mobile', price: 13200, brand: 'samsung', color: 'black'},
    {name: 'watch', price: 3000, brand: 'rolex', color: 'blue'},
];


const newProduct = {name: 'mobile', brand: 'samsung'};

// copy product  array and than add newProduct 

const newProducts = [...products, newProduct];

// create a new array  without one specific item

// remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== 'phone');
