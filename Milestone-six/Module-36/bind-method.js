const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj Masud',
    treatDey: function (expense){
        this.money = this.money - expense;
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

kibria.treatDey(100);
const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(500);
kibria.treatDey(500);

const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(4000);