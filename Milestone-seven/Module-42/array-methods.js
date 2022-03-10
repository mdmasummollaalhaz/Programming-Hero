const products =[
    {name: 'Laptop', price: 3200, brand: 'Lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iPhone', color: 'gold'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'silver'},
    {name: 'camera', price: 32090, brand: 'Lenovo', color: 'gray'},
    {name: 'mouse', price: 45555, brand: 'tech', color: 'black'},
    {name: 'monitor', price: 12000, brand: 'dell', color:'gray black'},
    {name: 'mobile', price: 30000, brand: 'Samsung', color: 'silver'},
    {name: 'keybord', price: 900, brand: 'Gaming', color: 'black'}
];

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);


// forEach
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

products.forEach(product => {

})


// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);


// 4. find
const special = products.find(p => p.name.includes('n'));
console.log(special)
