/* 
Data types (Primitive)
1. Number
2. String
3. boolean
4. undefined
5. null

7. symbol

Non-primitive
6. object

*/

let a = 'hello';
let b = a;
// console.log(a, b);
a = 'gello';
// console.log(a, b);

const x ={job:'web developer'};
const y = x;
console.log(x, y);
// x.job = 'Front end developer';
y.job = 'Front end developer';
console.log(x, y);

