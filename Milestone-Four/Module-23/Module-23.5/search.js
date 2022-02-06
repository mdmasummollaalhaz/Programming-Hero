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
        price: 6000
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
function searchProducts(products, seatchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(seatchText)){
            // console.log(product);
            result.push(product)
        }
        
    }
    return result;
}
const matched = searchProducts(products, 'Nokia');
console.log(matched);
