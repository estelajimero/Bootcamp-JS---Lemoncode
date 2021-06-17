const product = { count: 3, price: 12.55, type: "ropa" };

// Calcular el total
let total = product.count > 0 ? product.count * product.price : 0;
console.log(`El total es ${total}`);

// Calcular el IVA
// Con switch
switch(product.type) {
    case "alimentacion": 
        let alimento = product.price * 0.1;
        console.log(`El precio final del producto de alimentación con IVA es ${alimento}`);
        break;

    case "libro": 
        let libro = product.price * 0.04;
        console.log(`El precio final del libro con IVA es ${libro}`);
        break;

    default:
        let otro = product.price * 0.21;
        console.log(`El precio final del producto con IVA es ${otro}`);
        break;
}

// Con if
// if (product.type == "alimento") {
//     let alimentoIva = product.price * 0.1;
//     console.log(`El IVA para este producto de alimentación es ${alimentoIva}`);
// } else if(product.type == "libro") {
//     let libroIva = product.price * 0.04;
//     console.log(`El IVA para este libro es ${libroIva}`);
// } else {
//     let otroIva = product.price * 0.21;
//     console.log(`El IVA para este producto es ${otroIva}`);
// }


// Extra 1: Calcular sueldo neto en nómina
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

if(empleado.bruto < 12000) {
    if(empleado.hijos > 0) {
        let netoAnual = empleado.bruto;
        console.log(`El salario neto anual es ${netoAnual}`);
    }
} else if (empleado.bruto < 24000) {
    let 
}

// < 12K -> 0%
// < 24K -> 8%
// < 34K -> 16%
// > 34K -> 30%

// con hijos -> -2 pt