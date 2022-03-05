function welcomeMessage(name, greatHandler){
    // console.log(greatHandler);
    greatHandler(name);
    
}
// const name = ['Tom Hanks', 'Tom', 'Akib']
// const myObj = {name: 'Tom Fan', age: 12}

function greetMorning(name){
    console.log('Good Morning', name);
    
}
function greetAfternoon(name){
    console.log('Good Afternoon', name);
    
}
function greetEvening(name){
    console.log('Good Evening', name);
    
}

welcomeMessage('Tom', greetMorning);
welcomeMessage('Sakib Tom', greetAfternoon);
welcomeMessage('Jak Tom', greetEvening);


function handleClick(){
    console.log('button is clicked');
    
}
document.getElementById('btn').addEventListener('click', handleClick);

document.getElementById('btn').addEventListener('click', function(){
    console.log('button is clicked');
    
})