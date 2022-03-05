// 1. using object literal
const student = { name: 'Sakib', job:'Cricket'};


// 2. constructor
const person = new Object();


// 3.
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);


class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};
const peop = new People('Masum', 12);
console.log(peop);


// function
function Masum(name){
    this.name = name;

}
const man = new Masum('Kader');
console.log(man);
