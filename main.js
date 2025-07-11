const formulario = document.querySelector('.from-create');
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector('#descripcion').value;
    const contenedor = document.querySelector('.publicaciones');
    contenedor.innerHTML += `
        <div class="publicacion">
            <p>id: 00</p>
            <p>${descripcion}</p>
            <button>editar</button>
            <button>Eliminar</button>
        </div>`;

});