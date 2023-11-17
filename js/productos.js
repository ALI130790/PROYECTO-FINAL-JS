const productos = [

    {
        id: "Vestido 01",
        titulo: "Vestidos Camiseros",
        imagen: "./img/urbano/vestidos camiseros.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 11000
    },
    {
        id: "Vestido 02",
        titulo: "Vestido Casual",
        imagen: "./img/urbano/vestido petroleo.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 11000
    },
    {
        id: "Vestido 03",
        titulo: "Vestido Anita",
        imagen: "./img/urbano/vestido ANITA.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 11000
    },
    {
        id: "Vestido 04",
        titulo: "Vestido Flora",
        imagen: "./img/urbano/vestido flores.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 11000
    },
    {
        id: "Remera-01",
        titulo: "Bodie Catalina",
        imagen: "./img/urbano/bodie.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 11000
    },
    {
        id: "Remera-02",
        titulo: "Remera Verde Militar",
        imagen: "./img/urbano/remera verde.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 6000
    },
    {
        id: "Remera-03",
        titulo: "Remera Pastel",
        imagen: "./img/urbano/remera rosa pastel.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 5000
    },
    {
        id: "Remera-04",
        titulo: "Remera con aplique",
        imagen: "./img/urbano/reemera con aplique negra.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 5500
    },
    {
        id: "Remera-05",
        titulo: "Remera Kiss",
        imagen: "./img/urbano/remera besos.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 6000
    },
    {
        id: "Remera-06",
        titulo: "Top Rosa",
        imagen: "./img/urbano/top rosa.jpeg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 6000
    },
    {
        id: "Remera-07",
        titulo: "Camiseta c/botones",
        imagen:"./img/urbano/camiseta botones.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 8000
    },
    {
        id: "Pantalon 01",
        titulo: "Palazo de Colores",
        imagen: "./img/urbano/palazo colores.jpg",
        categoria: {
            nombre: "Urbano",
            id: "urbano"
        },
        precio: 11000
    },
    {
        id: "Pantalon 02",
        titulo: "Conjunto: Polerita rosa y Palazo gris",
        imagen:"./img/urbano/palazo girs.jpeg",
        categoria: {
            nombre: "Deportivo",
            id: "deportivo"
        },
        precio: 7000
    },
    {
        id: "Conjunto 01",
        titulo: "Conjunto: Sudadera y Calza Azul",
        imagen:"./img/deportivo/sudadera y calza azul.jpg",
        categoria: {
            nombre: "Deportivo",
            id: "deportivo"
        },
        precio: 11000
    },
    {
        id: "Conjunto 02",
        titulo: "Conjunto: Buzo y Calza Estampada",
        imagen:"./img/deportivo/Calza Fucsia Geo.jpg",
        categoria: {
            nombre: "Deportivo",
            id: "deportivo"
        },
        precio: 11000
    },
    {
        id: "Conjunto 03",
        titulo: "Conjunto: Remera Turquesa y Calza",
        imagen:"./img/deportivo/Calza Aplique verde.jpg",
        categoria: {
            nombre: "Deportivo",
            id: "deportivo"
        },
        precio: 11000
    },
    {
        id: "Conjunto 04",
        titulo: "Conjunto: Top Fucsia y Calza con Ondas",
        imagen:"./img/deportivo/Calza con ondas.jpg",
        categoria: {
            nombre: "Deportivo",
            id: "deportivo"
        },
        precio: 11000
    },
    {
        id: "Conjunto 05",
        titulo: "Conjunto: Remera Basica y Calza Jaspeda",
        imagen:"./img/deportivo/Calza Azul jaspeada.jpg",
        categoria: {
            nombre: "Deportivo",
            id: "deportivo"
        },
        precio: 11000
    },
    {
        id: "CConjunto 06",
        titulo: "Conjunto: Remera Basica y Calza Jaspeda",
        imagen:"./img/deportivo/Calza jaspeada gris.jpg",
        categoria: {
            nombre: "Deportivo",
            id: "deportivo"
        },
        precio: 11000
    },
    {
        id: "Conjunto 07",
        titulo: "Conjunto: Corpiño y Calza",
        imagen:"./img/deportivo/Conjunto fucsia Deportivo.jpg",
        categoria: {
            nombre: "Deportivo",
            id: "deportivo"
        },
        precio: 11000
    },
    {
        id: "Conjunto 08",
        titulo: "Conjunto: Corpiño y Calza",
        imagen:"./img/deportivo/conjunto.jpg",
        categoria: {
            nombre: "Deportivo",
            id: "deportivo"
        },
        precio: 11000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
    
}
/* <div class="producto">
    <img class="producto-imagen" src="./img/urbano/bodie.jpg" alt="">
    <div class="producto-detalles">
        <h3 class="producto-titulo">Bodie Catalina</h3>
        <p class="producto-precio">$11000</p>
        <button class="producto-agregar">Agregar</button>
    </div>
</div> 
*/
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })

});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    }else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);

    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {

    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}