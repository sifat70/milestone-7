const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'iphone', price: 9200, brand: 'mac', color: 'gold'},
    {name: 'mobile', price: 13200, brand: 'samsung', color: 'black'},
    {name: 'watch', price: 3000, brand: 'rolex', color: 'blue'},
];

const brands = products.map(product => product.brand);
console.log(brands);

const price = products.map(product => product.price);
console.log(price);


products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product =>{

})

// 3. filter

const cheap = products.filter(products => products.price <=5000);
console.log(cheap);


// 4. find
const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName)