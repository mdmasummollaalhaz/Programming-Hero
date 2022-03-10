// 'masum', 5, true, {}, []
// '', 0, false, null, undefined


// Check any truthy
const myVar = 5;
if(myVar){
    myVar = myVar*100;
}
else{
    myVar = 0;
}


// You check negative or falsy anything
let myMoney = 50;
if(!myMoney){

}


const money = 80;
let food;
if(money > 100){
    food= 'biryani';
}
else{
    food = 'tea';
}

// ternary
let food1 = money > 100 ? 'biryani' : 'tea';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'cook' : 'water';
console.log(drink);


// number to string conversition
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);


//
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('Hide user');
// isActive ? showUser () : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();

//use || if the left side is false then right side will be executed
isActive || hideUser();

//
isActive = !isActive;