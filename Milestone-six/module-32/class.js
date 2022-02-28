class Support {
    name;
    role = 'Support web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }   
    startSession(){
        console.log(this.name, 'Start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman', 'DUBAI');
aamir.startSession();

// console.log(aamir);
// console.log(salman); 

