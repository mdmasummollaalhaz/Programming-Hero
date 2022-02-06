/* for ( let i = 1; i<6; i++){
    console.log(i);
    
} */


function consleNumber(i){
    if( i > 500){
        return;
    }
    console.log(i);
    consleNumber(i+1);
    
}
consleNumber(1);