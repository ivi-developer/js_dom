const colorInput=document.querySelector('#colorInput');
const sizeRangeInput=document.querySelector('#sizeRangeInput');
const title=document.querySelector('.title');
console.log(sizeRangeInput.style);
function cambiarColor(e){
    title.style.color=e.target.value;
    sizeRangeInput.style.setProperty('--bar-color',e.target.value);

}
colorInput.addEventListener('input', cambiarColor);