function addnumbers(num1, num2){
    // console.log(arguments[1]);
    let result = 0;
    for(const num of arguments){
        // console.log(num);
        result = result + num;
    }
    // arguments.push(45);
    // const result = num1 + num2;
    return result;
}
const sum = addnumbers(23, 13, 50, 100, 45, 76);
// console.log(sum);



function getFullName(firstName, lastName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Ali', 'Hanif', 'Sorif', 'Karim');
console.log(name);
