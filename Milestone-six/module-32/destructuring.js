const fish = {
    id: 58,
    name: 'King Hilsha',
    price: 9000,
    phone: '018388222',
    address: 'Chandpur',
    dress: 'silver'
};

// console.log(fish.phone);

/* const id = fish.id;
const phone = fish.phone;
const price = fish.price;
const dress = fish.dress; */

const { id, name, price, phone, address, dress } = fish;


console.log(phone, price, id);


const company = {
    name: 'GP',
    ceo : {
        id: 1,
        name: 'Akib',
        food: 'Rice'
    },
    web: {
        work : 'Website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};

// const work = company.web.work;
// const framwork = company.web.framework;

const {work, framework} = company.web;
const {food} = company.ceo;
const {second, third} = company.web.tech;
console.log(work, framework, food, second, third);

