// Slice
const numbers = [3, 4, 2, 4, 23, 22, 43, 55, 89, 76];
// const numberSliced = numbers.slice(4, 7);
// console.log(numberSliced)


// Splice to remove an element from an array
// const numberSpliced = numbers.splice(3, 43);
// console.log(numberSpliced);
// console.log(numbers)


//
const numberSliced2 = numbers.splice(4, 3, 99, 111, 888, 777);
console.log(numberSliced2);
console.log(numbers);

