// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);


const number = 145;
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1121;
const isMyNumberEven = isEven(myNumber);
console.log('Result Even:', isMyNumberEven);


const herNumber = 1892;
const isHerNumberEvent = isEven(herNumber);
console.log('Result Even:',isHerNumberEvent);


// Is odd function
function isOdd(number){
    if (number %2 != 0){
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('Result odd:', isMyNumberEven);

