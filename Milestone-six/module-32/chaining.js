// declare veriable based on the name of an object property
const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 68
};
const { x,  b } = myObject;
// console.log(x);


// destructuring array
const [p, q, r] = [45, 37, 91, 86];
// console.log(p, q, r);



const [best, faltu] = ['akib', 'sohel'];
// console.log(best, faltu);
const {sky, color, money} = {
    sky: 'blue',
    soil: 'matti',
    color: 'red',
    money: 500
}


// chaining
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
console.log(company?.web?.tech.third);
console.log(company?.backend?.tech.third);










