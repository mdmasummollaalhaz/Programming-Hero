function megaFriend(friends){
    if(Array.isArray(friends) == false ){
        return 'Please provide an arry'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Ali', 'Akash', 'Roni', 'Sojib', 'Abul'];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);



// indexOf
if(friends.indexOf('Roni') != -1){
    // console.log('Success')
}
else{
    // console.log('Errors');
    
}



// includes
if(friends.includes('Roni')){
    console.log('Success');
    
}



// Concat
const first = [1, 3, 5];
const second = [4, 6, 8];
const combined = first.concat(second);
console.log(combined)