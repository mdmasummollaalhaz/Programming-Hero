/* document.cookie;
document.cookie.split('; ')
document.cookie.split('; ').map(c => console.log(c))
document.cookie.split('; ').map(c => console.log(c.split('=')))
document.cookie.split('; ').find(c=>c.includes('country'))
document.cookie.split('; ').find(c=>c.includes('IR_11660')).split('=')
document.cookie.split('; ').find(c=>c.includes('IR_11660')).split('=')[1] */


const getCookie = name =>{
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c=>c.includes(name));
    
    if(findCookie){
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}
