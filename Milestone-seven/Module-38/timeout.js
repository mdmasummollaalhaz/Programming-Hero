function doSometing(){
    console.log('coding')
}
console.log('first');
console.log('second');
// doSometing();
// setTimeout(doSometing, 5000);
setTimeout(function(){
    console.log('VS Code')
}, 5000);
setTimeout(() =>{
    console.log('Four second')
}, 4000)
console.log('third');
console.log('four');
