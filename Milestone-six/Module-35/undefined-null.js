/* 
1. variable value not assigned
2. Function but didn't write return
3. just wrote return but didn't return anything
4. parameter taht isn't passed
5. Property that doesn't exist in an object
6. accessing array element out of range
7. accessing delete array element
*/
let first;
// console.log(first);


function second(x, y){
    const sum = x + y;
    // document.getElementById('sum');
}
const result = second(3, 9);
// console.log(result);


function add(a, b){
    const sum = a + b;
    return;
    if( b< 10){
        return;
    }
    const fun = a * b;
    return sum;
}
const fourth = add(2, 7);
// console.log(fourth);


function double(a, b){
    const result = a * 2;
    // console.log(b);
    return result;
    
}
double(81);


const fifth = {
    name: 'sogir',
    age: 15,
    location: 'Dhaka'
};
// console.log(fifth.phone);



const sixth = [ 54, 33, 55, 3, 7];
// console.log(sixth[5]);
delete sixth[2];
// console.log(sixth[2]);



const seventh = undefined;
// console.log(seventh);



const myObj = {
    name: 'Ali',
    profession: null,
}
