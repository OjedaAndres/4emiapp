const formulario = document.querySelector('.from-create');
let cont = 1;
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector('#descripcion').value;
    const contenedor = document.querySelector('.publicaciones');
    contenedor.innerHTML += `
        <div class="publicacion">
            <p>id:${cont}</p>
            <p>${descripcion}</p>
            <button onclick="editar(this)">editar</button>
            <button onclick="eliminar(this)">Eliminar</button>
        </div>`;
    cont++;
});

function editar(e){
    const parrafo =e.parentElement.querySelector('p:nth-child(2)');
    parrafo.contentEditable = true;
    parrafo.focus();
    parrafo.onblur = () => parrafo.contentEditable = false;
    console.log(parrafo);
} 

function eliminar(e){
    e.parentElement.remove();
}
