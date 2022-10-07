const contenedorProductos = document.querySelector('#contenedorProductos')



const lavandinas =catalogo.filter( (prod) => prod.tipo === 'lavandina' )
    


lavandinas.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('apuesta')
    div.innerHTML = `
    <h3 class="apuesta__titulo">${producto.nombre}</h3>
    <p class="apuesta__parrafo">$${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar</button>
    `
    contenedorProductos.appendChild(div)

})
