console.log('i am here');
// alert('Do not showing')

const alertBtn = () => {
    alert('Alert start')
};

const tour = () =>{
    const res = confirm('Are you ready?');
    console.log(res);
    if(res === true){
        alert('Free admin please!')
    }
    else{
        console.log('DGM')
    }
};

const askName = () =>{
    const name = prompt('What is  your name?');
    if(name){
    console.log(name);
    }
}