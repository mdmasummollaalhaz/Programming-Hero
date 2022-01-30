var time = '10:13pm';
var bookPrice = 130;
var isWhiteColor = false;

// Array
var partners = ['sajid',  'mojid', 'akash', 'robel'];
var elementCount = partners.length;
var mojidIndex = partners.indexOf('mojid');
partners.push('Akash');
partners.pop();


// Conditionals
if(bookPrice < 120){
    console.log('I will buy it');
    
}
else{
    console.log('I can not buy it');
    
}


// Loop
var i = 0;
while(i <= 42){
    //do some work;
    i++;
}

for (var i = 0; i < 23; i++){

}


// function
function isMoonUp(){
    if(time >= 19 && time <=5){
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(5);
console.log(moonStatus);


// Let const
// value of variable could change
let price = 23;
price = 33;
price = 21;

// value of variable will not change
const myName = 'Masum';
console.log(myName);
myName = 22;

