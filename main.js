class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

const productos = [
    new Producto("Notebook", "electronica", 800),
    new Producto("Camiseta", "ropa", 20),
    new Producto("Libro", "libros", 10),
    new Producto("Telefono", "electronica", 500),
    new Producto("Pantalon", "ropa", 30),
    new Producto("Tablet", "electronica", 300),
];

function mostrarProductos(listaProductos) {
    const listaProductosElem = document.getElementById("lista-productos");
    listaProductosElem.innerHTML = "";

    listaProductos.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaProductosElem.appendChild(li);
    });
}

function filtrarProductos(categoria) {
    if (categoria === "todas") {
        return productos;
    } else {
        return productos.filter(producto => producto.categoria === categoria);
    }
}

function ordenarProductos(arrayProductos, orden) {
    const arrayOrdenado = arrayProductos.slice();

    arrayOrdenado.sort((a, b) => {
        if (orden === "asc") {
            return a.precio - b.precio;
        } else {
            return b.precio - a.precio;
        }
    });

    return arrayOrdenado;
}

function iniciar() {
    const categoriaSelect = document.getElementById("categoria");
    const ordenSelect = document.getElementById("orden");

    categoriaSelect.addEventListener("change", () => {
        const categoriaSeleccionada = categoriaSelect.value;
        const productosFiltrados = filtrarProductos(categoriaSeleccionada);
        const productosOrdenados = ordenarProductos(productosFiltrados, ordenSelect.value);
        mostrarProductos(productosOrdenados);
    });

    ordenSelect.addEventListener("change", () => {
        const categoriaSeleccionada = categoriaSelect.value;
        const productosFiltrados = filtrarProductos(categoriaSeleccionada);
        const productosOrdenados = ordenarProductos(productosFiltrados, ordenSelect.value);
        mostrarProductos(productosOrdenados);
    });

    mostrarProductos(productos);
}

iniciar();
