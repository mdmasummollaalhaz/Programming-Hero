/* console.log('first');
setInterval(()=>{
    console.log('set Interval')
}, 3000)
console.log('second'); */

let seconds = 0;
const timeId = setInterval(()=>{
    // seconds++;
    console.log(seconds++);
    if(seconds>15){
        clearInterval(timeId);
    }
}, 1000)