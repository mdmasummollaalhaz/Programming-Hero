const phones = [
    {
        name: 'Sumsung S5',
        price: '23000',
        camera: 10,
        storage: 16
    },
    {
        name: 'Walton',
        price: '3000',
        camera: 12,
        storage: 16
    },
    {
        name: 'Oppo u3',
        price: '5000',
        camera: 10,
        storage: 16
    },
    {
        name: 'Nokia d7',
        price: '2000',
        camera: 10,
        storage: 16
    }
];

let cheapest = phones[0];
for(const phone of phones){
    // Compare price only
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);
