const names = ['abul', 'babul', 'akash' , 'abul', 'sumon', 'akash'];

function removeDuplicate(names){
    const unique = [];
    /* for(let i = 0; i <names.length; i++){
        const element = names[i];
        console.log(element);
        
    } */
    for(const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uiqueNames = removeDuplicate(names);
console.log(uiqueNames);
