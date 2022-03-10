// 1. sHow to declare a variable using let and const
const fatherName = 'Ali hossain';
let season = 'Rainy';
season = 'winter';

// 2. conditions
// 6 basic condition: >, <, ===, !==, <=, >=
// Multiple conditions: && , ||

if(fatherName === 'Ali' || season === 'rainy'){

}
else if(fatherName === 'Ali hossain'){

}
else{

}

// 3. array declare
//index
//length, push
const numbers = [1, 2, 43, 44, 83, 39];
numbers[0] = 55;

// 4. for loop
for(let i = 0; i <numbers.length; i++){
    const number = numbers[i];
    confirm.log(number);
}

// 5. function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(36, 77);

// 6. object
// 3 ways to access property by name
const student = {
    name: 'Ali',
    age: 32,
    movies: ['King', 'The hero']
}
const myVariable = 'age'
console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via properly name in a variable