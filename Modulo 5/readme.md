Introducción

Vamos a trabajar con un carrito de compra.

Un producto dentro de una línea del carrito de compra contiene la siguiente información:

* Nombre del producto
* Precio unitario
* Cantidad
* Indicador para saber si el producto es premium

A partir del siguiente carrito de compra:

const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

Realizar los siguientes ejercicios:
- Mostrar el carrito de la compra.
- Listar todos los productos.
- Eliminar el producto con id 54657 del carrito de la compra.
- Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
- Filtrar por los productos que sean prime.

***** Opcional *****
- Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido
tiene gastos de envío".
- Mostrar el carrito en un listado de html básico.
- Aplicar un descuento del 5% si la compra es mayor de 100 €.