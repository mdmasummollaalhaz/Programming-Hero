const myName = 'ami';
const student = undefined;  //TypeError: Cannot read properties of undefined (reading 'name')
// console.log(student.name);

try{
    myName = 'tumi';
}
catch(error){  //er error ex
    console.log('Geting : ', error);

}
console.log(100);

console.log(myName);



// name = 'tumi';
// console.log(name); //TypeError

/* 
for(let i = 0; i < 10 i++){

}
*/
