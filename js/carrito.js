/* CARRITO */

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


/* ESTO SE MODIFICO DEL INDEX -- FUNCION PARA CARGAR PRODUCTOS */
function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carrito-producto-titulo">
            <small>Titulo</small>
            <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>$${producto.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
        `;
            contenedorCarritoProductos.append(div);
        })

    } else {

        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    
    actualizarBotonesEliminar();
    actualizarTotal();
}

/* ESTO SE MODIFICO DEL INDEX -- CARGAR PRODUCTOS

<img class="carrito-producto-imagen" src="./img/urbano/palazo colores.jpg" alt="">
    <div class="carrito-producto-titulo">
        <small>Titulo</small>
         <h3>Palazo colores</h3>
     </div>
    <div class="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>1</p>
     </div>
    <div class="carrito-producto-precio">
        <small>Precio</small>
        <p>$10000</p>
    </div>
    <div class="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>$10000</p>
    </div>
    <button class="carrito-producto-eliminar"><i class="bi bi-trash3-fill"></i></button>
*/

cargarProductosCarrito();

/* FUNCION ELIMINAR DEL CARRITO */
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

/* FUNCION CARRITO */
function eliminarDelCarrito(e) {
    Toastify({
        text: "Producto elimiinado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #fc4271, #4e0b1b )",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem",
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem' 
        },
        onClick: function () { } 
    }).showToast();

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

/* FUNCION VACIAR CARRITO */
botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro que deseas eliminar el carrito',
        icon: 'question',
        html: `Se eliminarán ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:'SI',
        cancelButtonText: 'NO',
    }).then((result) => {
           
            if (result.isConfirmed) {
                productosEnCarrito.length = 0;
                localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
                cargarProductosCarrito();
            } 
      })
}

/* FUNCION TOTAL */
function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

/* FUNCION BOTON COMPRAR */
botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
   
}