const numbers = [89, 35, 98, 12];
const student = {
    name: 'Ali Hossain',
    age: 32,
    movies: ['Kind', 'The man', 'The woman fast']
};

// 1. Template string
const about = `My name is ${student.name}. Age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);


// 2. arrow function
const getFifyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEvent = x => x % 2 == 0;
const addThree = (x, y , z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2; 
    return sum;
}

// Spread operator
const newNumbers = [...numbers];
console.log(numbers)

numbers.push(888);
numbers.push(888);
console.log(newNumbers)


// Create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);