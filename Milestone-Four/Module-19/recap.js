// 1. Variable
var favoriteBook = '4 hours work week';

// 2. Array
var bookList = ['Positioning', 'Hooked', 'Start with why', 'Shoe dog'];
var shoeDogIndex = bookList.indexOf('Shoe dog');
// console.log(shoeDogIndex);
bookList[1] = 'Story Brand'
// console.log(bookList);

bookList.push('Small Giants');
bookList.pop();


// 3. Conditionals
if( bookList[1] == 'Hooked'){
    // console.log('I am hooked');
    
}
else{
    // console.log('I am not Hooked');
    
}

// 4. While loop
var i = 0; //Loop variable
while(i < 15){
    console.log(i);
    // console.log('Looping');
    i++;
    
    
}


// 4.1 For loop
for(var i = 0; i < 15; i++){
    console.log(i);
    
}