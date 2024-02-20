const wrapper=document.querySelector('#wrapper');
const colorWrapper=document.querySelector('#bgColor');
const newUserName=document.querySelector('[data-id="userName"]');
const showB=document.querySelector('.showB');
const hideB=document.querySelector('.hideB');
function showSection(){
    wrapper.className='show';
    colorWrapper.className='show';
}
function hideSection(){
    wrapper.className='hide';
    colorWrapper.className='hide';
}
showB.addEventListener('click',showSection);
hideB.addEventListener('click',hideSection);
const bgColor=document.querySelector('#bgColor');
function bgColorDelegation(e){
    if(e.target.matches('.colorButton')){
         e.currentTarget.style.backgroundColor=e.target.getAttribute('data-color');
         document.querySelector('#showHide').style.backgroundColor=e.target.getAttribute('data-color');
    }
}
bgColor.addEventListener('click', bgColorDelegation);
const formulario=document.querySelector('.formulario');
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    newUserName.textContent=document.querySelector('#newNameInput').value;
    document.querySelector('#newNameInput').value="";
});