var first = 5;
var second = 7;
console.log(first , second);

// First approach
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// Destruturing
[first, second] = [second, first]
console.log(first , second);