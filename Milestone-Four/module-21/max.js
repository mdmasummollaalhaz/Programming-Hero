const business = 450;
const minister = 350;
const army = 600;

/* if ( business > minister ){
    console.log('Business person is bigger');
}
else{
    console.log('Minister person is bigger'); 
} */


// Compare 3
/* if (business > minister && business > army){
    console.log('business is biggest');
    
}
else if (minister > business && minister > army){
    console.log('Minister is biggest');
    
}
else{
    console.log('Army is biggest');
    
} */


function firstLargest(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}
var result = firstLargest(77, 33);
console.log(result);


// Task 1: Create a function that takes three numbers as input parameter and returns you the largest number of the three

// Task 2: Writr a function to find the smallest of three numbers

/* 
var max = Math.max(business, minister, army);
console.log('Largest', max); */
