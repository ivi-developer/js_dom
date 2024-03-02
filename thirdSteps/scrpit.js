const tareaInput=document.querySelector('.tareaInput');
const tareaButton=document.querySelector('.tareaButton');
const tareaLista=document.querySelector('.tareaLista');
const tareaListaTitulo=document.querySelector('.tareaListaTitulo');
const form=document.querySelector('.form');
message();
function message(){
    tareaListaTitulo.textContent=tareaLista.firstElementChild?'Mira todo lo que tenes que hacer cagon':'cagon empeza a agregar tareas';
} 
function handleSubmit(e){
    e.preventDefault();
    crearTarea(tareaInput.value);
    form.reset();
}
form.addEventListener('submit', handleSubmit);
function crearTarea(value){
    const nuevaTarea=document.createElement("li");
    nuevaTarea.textContent=value;
    tareaLista.appendChild(nuevaTarea);
    borrarTarea(nuevaTarea);
}
function borrarTarea(e){
    message();
    e.addEventListener('dblclick',()=>{e.remove();message();});
}