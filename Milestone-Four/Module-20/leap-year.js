function isLeapYear(year){
    if(year % 4 ==0){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 21001;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Result:', isMyYearLeapYear);


const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('Result:', isYourYearLeapYear);

