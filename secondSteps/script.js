const boton=document.querySelector('.button');
const modal=document.querySelector('.modal');
function mostrarModal(){
    modal.classList.add('show');
}
boton.addEventListener('click', mostrarModal);
const botonCierre=document.querySelector('.modal_close');
function ocultarModal(){
    modal.classList.remove('show');
}
botonCierre.addEventListener('click', ocultarModal);