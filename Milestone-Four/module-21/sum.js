const numbers = [33, 45, 24, 33, 553, 53];
var sum = 0;
for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;    
}
console.log(sum);


function arrayTotal (numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        
    }
    return sum;
}
const total = arrayTotal([23, 44, 22]);
console.log(total);
