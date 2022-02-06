const products = [
    {
        name: 'Iphone',
        price: 200000
    },
    {
        name: 'Apple',
        price: 3000
    },
    {
        name: 'Sumsung',
        price: 4000
    },
    {
        name: 'Opp',
        price: 1000
    },
    {
        name: 'Nokia',
        price: 5000
    },
    {
        name: 'laptop',
        price: 300000
    },
    {
        name: 'watch',
        price: 300000
    }
];

/* for (const product of products){
    if(products.price<5000){
        break;
    }
    console.log(product);
    
} */

for(const product of products){
    if(product.price < 10000){
        continue;
    }
    console.log(product);
    
}