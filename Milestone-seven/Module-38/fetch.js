console.log(1111);
console.log(22222);
// setTimeout(()=>console.log('first'), 4000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(33333);
console.log(44444);
for(let i =0; i < 100000; i++){
    console.log(i)
}

