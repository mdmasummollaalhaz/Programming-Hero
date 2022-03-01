class TeamMember{
    name;
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
    groupSupportTime;
    designation = 'Support web Dev';
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, 'Start a support session');
    }
}

class StudentCare extends TeamMember{
    /* name;
    designation = 'student care web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    } */
    designation = 'Care web Dev';
    buildARoutine(student){
        console.log(this.name, 'Build a routine', student);
        
    }
}


class NeptuneDev extends TeamMember{
    /* name;
    designation = 'student care web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    } */
    designation = 'Neptune App Dev';
    codeEditor;
    constructor(name, address, editor){
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'relase app version', version);
        
    }
}
const aamir = new Support('Aamir Khan', 'BD', 11);
const salman = new Support('Solaiman', 'DUBAI', 3);
aamir.startSession();


const alia = new StudentCare('Alia Batt', 'Mumbai');
const ash = new NeptuneDev ('Ash','India', 'Android Studio' );
ash.releaseApp('1.4.5')
console.log(ash.name);



// Proto chan
// ash.__proto__
// ash.hasOwnProperty