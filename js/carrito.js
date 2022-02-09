const carrito = document.getElementById('carrito'),
    template = document.getElementById('template'),
    fragment = document.createDocumentFragment(),
    btnesBotones = document.querySelectorAll('.card .btn');

const carritoObjeto = {}

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.dulces)

    const producto = {
        titulo: e.target.dataset.dulces,
        id: e.target.dataset.dulces,
        cantidad: 1

    }

    if (carritoObjeto.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1
    }

    carritoObjeto[producto.titulo] = producto

    pintarCarrito()
};

const pintarCarrito = () => {

    carrito.textContent = "";
    
    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
}
 

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));
    




