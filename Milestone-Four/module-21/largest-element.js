function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
        
    }
    return largest;
}

const ages = [12, 32, 22, 44, 22, 33, 77];
const oldest = largestElement(ages)
const oldest2 = largestElement([-2 , -4, 21, 33])
console.log('Oldest:', oldest);
console.log('Oldest Two:', oldest2);


// Task : Find the lowest element of an array
