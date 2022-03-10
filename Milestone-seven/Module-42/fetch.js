// 1. JSON => stringify, parse
const student = {
    name: 'Ali Hossain',
    age: 32,
    movies: ['Kind', 'The man', 'The woman fast']
};
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);


// 2. fetch
fetch('url')
 .then(res => res.json())
 .then(data =>console.log(data));


//  keys, values
const keys = Object.keys(student);
const values = Object.values(student);


// for
const numbers = [23, 44, 42, 44, 87];
numbers.forEach( num => console.log(num));
numbers.map(num => num * 2);


// 'for of' on array like object
// loop on an object using 'for in'


// add or remove from an array
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

const newProduct = {name: 'webcam', price: 700, brand: 'theGray'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];


// Create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !=='phone');
