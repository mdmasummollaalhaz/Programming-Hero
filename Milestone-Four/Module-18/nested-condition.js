var danisPrice = 50;
var butterPrice = 25;
var bisketPrice = 10;
var myBudget = 5;
var packedwell = false;


// if(danisPrice < myBudget){
//     console.log('Got danish');  
// }
// else if(butterPrice < myBudget){
//     console.log('Got Butter');
// }
// else if(bisketPrice < myBudget){
//     console.log('Got Bisket');  
// }
// else{
//     console.log('Did not get any');
// }


if(danisPrice < myBudget){
    if(packedwell == true ){
        console.log('Got Danish');
        
    }
    else{
        console.log('Dose not got danish');
        
    }
}
else{
    console.log('Not working');
    
}