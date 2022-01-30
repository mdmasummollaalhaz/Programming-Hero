// var i = 0;
// while (i < 10){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i++;
    
// }



// for (var i = 0; i < 20; i++){
//     console.log(i);
//     if(i == 8){
//         break;
//     }
    
// }


var numbers = [83, 82, 33, 42, 44, 22, 55, 119];
// for (var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
//     if (number > 90){
//         break;
//     }
    
// }

for (var i = 0; i < numbers.length; i++){
    var number = numbers[1];
    if(number > 90){
        continue;
        break;
    }
    console.log(number);
    
}

