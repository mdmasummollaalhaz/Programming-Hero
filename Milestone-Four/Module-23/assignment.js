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







