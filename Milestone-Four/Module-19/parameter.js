function bringSingara(taka){
    console.log('Singara Price', taka);
    console.log('Mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
    
}
var money = 150;
// bringSingara(100);
// bringSingara(money);

var singara = bringSingara(money);
console.log('Total', singara);



