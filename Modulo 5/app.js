const cart = [
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

// Listar todos los productos de la compra
for (product of cart) {
    getProducts(product);
}

function getProducts (product) {
    console.log("---------");

    for(attr in product) {
        console.log(attr.toUpperCase() + ": " + product[attr]);
    }
}

// Eliminar el producto con id 54657 del carrito de la compra
// let index;

// for (let i = 0; i < cart.length; i++) {
//     if (cart[i].id == 54657) {
//         index = i;
//     }
// }

// cart.splice(index, 1);

// console.log(cart);

// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad)
// let total = 0;

// for (product of cart) {
//     total += product.price * product.count;
// }

// console.log(total);

// Filtrar por los productos que sean prime
// for (product of cart) {
//     if(product.premium == true) {
//        getProducts(product); 
//     }
// }

// Opcional
// Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío"
// for (product of cart) {
//     if(product.premium == true) {
//         console.log("Pedido sin gastos de envío");
//     } else {
//         console.log("Este pedido tiene gastos de envío");
//     }
// }

// Mostrar el carrito en un listado de html básico
// let ul = document.createElement('ul');
// document.getElementById('cart-list').appendChild(ul);
// ul.className = "list-item";

// for (product in cart) {
//     let listItem = document.createElement('ul');
//     listItem.innerHTML = cart[product].name;

//     let listItemId = document.createElement('li');
//     listItemId.innerHTML = "ID: " + cart[product].id;

//     let listItemPrice = document.createElement('li');
//     listItemPrice.innerHTML = "Precio: " + cart[product].price;

//     let listItemCount = document.createElement('li');
//     listItemCount.innerHTML = "Cantidad: " + cart[product].count;

//     let listItemPremium = document.createElement('li');
//     listItemPremium.innerHTML = "Premium: " + cart[product].premium;

//     listItem.className = "list-item";
//     listItemId.className = "list-content";
//     listItemPrice.className = "list-content";
//     listItemCount.className = "list-content";
//     listItemPremium.className = "list-content";

//     ul.appendChild(listItem);
//     listItem.appendChild(listItemId);
//     listItem.appendChild(listItemPrice);
//     listItem.appendChild(listItemCount);
//     listItem.appendChild(listItemPremium);
// }

// Aplicar un descuento del 5% si la compra es mayor de 100€
// let total = 0;

// for (product of cart) {
//     total += product.price * product.count;

//     if(total > 100) {
//         total = total * 0.95;
//     }
// }

// console.log(total);
