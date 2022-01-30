var computer = {
    price: 13223,
    storage: '15GB',
    processor: 'Init i5'
}
// console.log(computer);
// console.log(computer.processor);

var computerPrice = computer.price;
// console.log( computerPrice);


//Set a object properly value
computer.price = 2322222;
console.log(computer);


// Diffrent ways to set a value of an object property
computer.price = 220000;
computer["price"] = 33333;
console.log(computer);

var priceProperty = "price";
computer[priceProperty] = 1222;
console.log(computer);




var storeageProperty = 'storage';
computer[storeageProperty] = '512GB';
console.log(computer);
