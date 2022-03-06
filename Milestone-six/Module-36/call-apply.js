const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj Masud',
    treatDey: function (expense, boksis, tax){
        this.money = this.money - expense - boksis - tax;
        console.log('The', this);
        return this.money;
    }
};
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
};
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'Normal Gulam',
};

// call
/* kibria.treatDey.call(heroBalam, 500, 20, 50);
kibria.treatDey.call(heroBalam, 300, 10, 10);
kibria.treatDey.call(heroBalam, 3000, 200, 300); */

kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(heroBalam, [700, 120, 50]);
kibria.treatDey.apply(normalGolam, [700, 120, 50]);