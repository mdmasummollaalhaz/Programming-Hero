const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'Dell yellow laptop with black camera',
    'LG supernove Laptop'

];

const searching = 'dell';

//indexOf()
const output = [];
for(const product of products){
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1 ){
        // output.push(product);
    }
}
// console.log(output);


// Includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);


// Starts with
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);


