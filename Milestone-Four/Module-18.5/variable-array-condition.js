var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = true;

// Array
var items = ['Bottle', 'mug', 'glass'];
items.indexOf('thala'); //-1
items.push('envelope');
items.push('watch');
items.pop();
console.log(items);


//Conditionals
if(items.length >= 4){
    console.log('You have to many stuff on your desk');
    
}
else if(items.length == 4){
    console.log('You only have one hali items');
    
}
else{
    console.log('Wow! You have a clean desk');
    
}

