const products =[
    {
        name: 'laptop',
        price: 7000,
    },
    {
        name: 'shirt',
        price: 500,
        quantity: 3
    },
    {
        name: 'watch',
        price: 3000
    },
    {
        name: 'phone',
        price: 20000
    }
]

let totalPrice = 0;
for (const product of products){
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);


const cart =[
    {
        name: 'laptop',
        price: 7000,
        quantity: 1
    },
    {
        name: 'shirt',
        price: 500,
        quantity: 3
    },
    {
        name: 'watch',
        price: 3000,
        quantity: 2
    },
    {
        name: 'phone',
        price: 20000,
        quantity: 1
    }
]

let cartTotal = 0;
for(const product of cart){
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
