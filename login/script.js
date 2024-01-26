const Wrapper=document.querySelector('.Wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnlogin-popup');
const iconsClose=document.querySelector('.icons-close');

registerLink.addEventListener('click',()=>{
    Wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    Wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    Wrapper.classList.add('active-popup');
});
iconsClose.addEventListener('click',()=>{
    Wrapper.classList.remove('active-popup');
});
function printMesage(){
    document.getElementById('output').innerHTML
}