/* 
Falsy:
false
0
empty string
undefined
null
NaN

-----------------------
Truthy:
true
any number (positive or negative)
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy will be truthy
*/

// const x = false;
// const x = true;
// const x = 4;
// const x = -4;
// const x = 0;
// const x = '';


// let y;
// let y = null;
// let y = parseInt('hello');
let y = {};
console.log('value of y:', y);

const x = ' ';
if(x){
    console.log('Variable is truthy');
}
else{
    console.log('variable is falsy');
    
}