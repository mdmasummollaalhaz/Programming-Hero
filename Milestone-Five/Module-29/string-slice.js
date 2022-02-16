const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

//slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);


// substr
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// substring
const subPart = anthem.substring(11, 15);
// console.log(subPart);


// concat
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('Ali hossain')
console.log(fullString);



const words2 = ['a', 'b', 'c', 'd', 'e'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('P');
console.log(allJoined);
