const carrito = []

const productos = [{imagen: '👖', codigo: 1, tipo: 'Pantalones jeans', precio: 2599},
                 {imagen: '🥼', codigo: 2, tipo: 'Buzos y tapados', precio: 3859},
                 {imagen: '🧥', codigo: 3, tipo: 'Abrigos y camperas', precio: 7851},
                 {imagen: '👚', codigo: 4, tipo: 'Camisas', precio: 8599},
                 {imagen: '🩳', codigo: 5, tipo: 'Faldas', precio: 4894},
                 {imagen: '👕', codigo: 6, tipo: 'Remerones ', precio: 9748},
                 {imagen: '🎩', codigo: 7, tipo: 'Accesorios', precio: 3281},
                 {imagen: '🎽', codigo: 8, tipo: 'Musculosa ', precio: 1938},
                 {imagen: '🩱', codigo: 9, tipo: 'Malla enteriza', precio: 3122},
                 {imagen: '👘', codigo: 10, tipo: 'Kimono ', precio: 8745}]

const mensajeInicial = "Selecciona tu prenda por el código numérico:"



function buscarProducto(codigo) {
    let resultado = productos.find((prenda)=> prenda.codigo === parseInt(codigo))
        return resultado
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carrito está vacío.")
        return 
    }

    const shopping = new Compra(carrito)
    alert('💰 El costo total es de: $ ' + shopping.obtenerSubtotal())

    let descuento = 0.90 



    let respuesta = confirm("¿Deseas confirmar tu pago?")
        if (respuesta === true) {
            alert('✅ Confirmamos tu pago de: $ ' + (shopping.obtenerSubtotal() * descuento) + "\n Muchas gracias por la compra :)")
            carrito.length = 0
        }
}

function verCarrito() {
    console.table(carrito)
}

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("⛔️ Error en el código ingresado.")
            let respuesta = confirm("¿Deseas intentar de nuevo?")
                if (respuesta === true) {
                    comprar() 
                }
                return
        }

    let prendaElegida = buscarProducto(codigo)
        if (prendaElegida === undefined) {
            alert("⛔️ Error en el código ingresado.")
                return
        }

        alert(prendaElegida.imagen + ' ' + prendaElegida.tipo + ' - ha sido agregada al carrito.')
        carrito.push(prendaElegida)

        let respuesta = confirm("¿Deseas llevar otra prenda?")
            if (respuesta === true) {
                comprar()
            } else {
                finalizarCompra()
            }
}