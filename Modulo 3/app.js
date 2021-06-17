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

// Avanzado: Calcular el total de IVA
let precioIva = (product.price * 0.21) + product.price;

function getTotalVat(product) {
    return product.count > 0 ? precioIva : 0;
}

let resultado = getTotalVat(product).toFixed(2);

console.log(`El valor total de los productos es: ${resultado}€`);

// Extra 1: Calcular sueldo neto anual y mensual en nómina
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

let netoAnual = 0;
let netoMensual = 0;

if(empleado.bruto < 12000) {
    netoAnual = empleado.bruto;
    netoMensual = (netoAnual / empleado.pagas).toFixed(2);
    console.log(`El salario neto anual es ${netoAnual}`);
    console.log(`El salario neto mensual es ${netoMensual}`);
} else if (empleado.bruto < 24000) {
    if(empleado.hijos > 0) {
        netoAnual = (empleado.bruto * 0.94).toFixed(2);
        netoMensual = (netoAnual / empleado.pagas).toFixed(2);
        console.log(`El salario neto anual para menos de 24K con hijos es ${netoAnual}`);
        console.log(`El salario neto mensual para menos de 24K con hijos es ${netoMensual}`);
    } else {
        netoAnual = (empleado.bruto * 0.92).toFixed(2);
        netoMensual = (netoAnual / empleado.pagas).toFixed(2);
        console.log(`El salario neto anual para menos de 24K sin hijos es ${netoAnual}`);
        console.log(`El salario neto mensual para menos de 24K sin hijos es ${netoMensual}`);
    }
} else if (empleado.bruto < 34000) {
    if(empleado.hijos > 0) {
        netoAnual = (empleado.bruto * 0.86).toFixed(2);
        netoMensual = (netoAnual / empleado.pagas).toFixed(2);
        console.log(`El salario neto anual para menos de 34K con hijos es ${netoAnual}`);
        console.log(`El salario neto mensual para menos de 34K con hijos es  ${netoMensual}`);
    } else {
        netoAnual = (empleado.bruto * 0.84).toFixed(2);
        netoMensual = (netoAnual / empleado.pagas).toFixed(2);
        console.log(`El salario neto anual para menos de 34K sin hijos es ${netoAnual}`);
        console.log(`El salario neto mensual para menos de 34K sin hijos es ${netoMensual}`);
    }
} else {
    if(empleado.hijos > 0) {
        netoAnual = (empleado.bruto * 0.72).toFixed(2);
        netoMensual = (netoAnual / empleado.pagas).toFixed(2);
        console.log(`El salario neto anual para más de 34K con hijos es ${netoAnual}`);
        console.log(`El salario neto anual para más de 34K con hijos es ${netoAnual}`);
    } else {
        netoAnual = (empleado.bruto * 0.7).toFixed(2);
        netoMensual = (netoAnual / empleado.pagas).toFixed(2);
        console.log(`El salario neto anual para más de 34K sin hijos es ${netoAnual}`);
        console.log(`El salario neto mensual para más de 34K sin hijos es ${netoMensual}`);
    }
}