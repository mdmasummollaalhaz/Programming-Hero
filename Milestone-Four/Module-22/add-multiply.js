/* 
chairWood = 3cft/chair
tableWood = 10cft
bedWood = 50cft
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // Wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantiry   = bedQuantity * perBedWood;

    // Adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantiry;
    return totalWood;
}
const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);
