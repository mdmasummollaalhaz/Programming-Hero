function inchToFeed(inches){
    var feet = inches/12;
    return feet;
}

var myInches = 131;
var feet = inchToFeed(myInches);
console.log('myInch to feet:', feet);

var dadiInches = 144;
var feet = dadiInches/12;
console.log(feet);


// Mile to km
function milToKilometer (miles){
    var km = miles * 1.60934;
    return km;
}
var marathon = milToKilometer(24.3);
console.log('Total km', marathon);



