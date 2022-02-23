let likePerson = 'Ali hossain';
likePerson = 'Masum';

const hubby = 'The hubby';


// Default parameter
function getName(first, last='Chowdhury'){
    return first + ' ' + last;
}

// template string
const myPeople = `My people are: ${hubby} and his fullName is ${getName('Akbar')}. My name is ${likePerson}.`
console.log(myPeople);


// arrow function
const getName2 = (first , last ) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) =>{
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart ) * thirdPart;
    return result;
}


const numbers = [2, 4, 67, 54];
const max = Math.min(...numbers);
