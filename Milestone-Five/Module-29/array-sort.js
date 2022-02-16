const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
const friends = [
    'kabli',
    'josim',
    'razzak',
    'anwar'
];
// const sortedFriends = friends.sort();
// const reversedFriends = friends.reverse();
// console.log(reversedFriends)
// console.log(sortedFriends)

const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);


// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBig = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortedBig)
