// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;

function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}
// console.log(x, y);

const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);

console.log(boxify(90, 34));


// Object destructuring
const {name, age} = {name: 'alu', age: 12};
const {name, age} = {id: 12, name: 'alu', age: 12, salary: 23000};

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Dhaka',
        drink: 'water',
        watch:{
            color: 'black',
            price: 500,
            brand: 'gardin'
        }
    }
}
const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee.specification.watch;
// const {brand} = employee?.specification?.watch;