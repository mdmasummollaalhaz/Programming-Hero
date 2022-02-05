// Problem 1:

// We know that 1 ana = 0.0625 vori
// 1 vori = 16 ana
function anaToVori(ana){
    let vori = ana * 0.0625;
    return vori;
}
let inputAna = 16;
const totalVore = anaToVori(inputAna);
console.log('Total vori:', totalVore);


// Problem 2:
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity){
    
    // Per items cost
    const perSingara    = 7;
    const perSomucha    = 10;
    const perJilapi     = 15;
    
    // Total quantity
    const totalSingaraQuantity   = singaraQuantity   * perSingara;
    const totalSomuchaQuantity   = somuchaQuantity   * perSomucha;
    const totalJilapiQuantity    = jilapiQuantity    * perJilapi;

    // Total calculation
    const totalCost = totalSingaraQuantity + totalSomuchaQuantity + totalJilapiQuantity;
    return totalCost;
}

const inputItems = pandaCost(1, 1, 1);
console.log('Total taka:', inputItems);


// Problem 3:
function picnicBudget(persons){
    
    // Budget for person
    const firstLessThan100  = 5000;
    const secondLessThan200 = 4000;
    const thirdMoreThanRest = 3000;

    // Conditions
    if(persons <= 100){
        const firstCondition = persons * firstLessThan100;
        return firstCondition;
    }
    else if(persons <= 200){
        const secondCondition   = 100 * firstLessThan100;
        const restPerson        = persons - 100;
        const secondRestPerson  = restPerson * secondLessThan200;
        const totalPersons      = secondCondition + secondRestPerson;
        return totalPersons;
    }
    else{
        const secondCondition   = 100 * firstLessThan100;
        const secondRestPerson  = 100 * secondLessThan200;
        const restPerson        = persons - 200;
        const totalRestPerson  = restPerson * thirdMoreThanRest;
        const totalPersons      = secondCondition + secondRestPerson + totalRestPerson;
        return totalPersons;
    }
}

const totalPersonsInput = picnicBudget(301);
console.log('Total cost:', totalPersonsInput);


// Problem 4:
function oddFriend( frindsName ){
    for( let i = 0; i < frindsName.length; i++){
           if( frindsName[i].length %2 != 0  ){
           return frindsName[i];
       }
    }
}
const frindsName = [
    'muzami',
    'harun',
    'maruff',
    'Ali',
    'Karim',
    'Sohel',
    'Hossain',
    'Shikder',
    'Manna'
];
const outPut = oddFriend(frindsName);
console.log('The odd:', outPut);
