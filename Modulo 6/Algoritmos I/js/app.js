const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

let products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

let form = document.getElementById("shopping-list");
let button = document.getElementById("calculate");

var isValidUnit = () => {
    var isValid = true;
    for(item of products){
        if(item.units > 0){
            isValid = false;
        }
    }
    document.getElementById("calculate").disabled = isValid;
}

isValidUnit();

function showArrayElements() {
    for(let i = 0; i < products.length; i++) {
        let productDiv = document.createElement("div");
        productDiv.setAttribute("class", "product-div");

        let productItem = document.createElement("label");
        productItem.innerHTML = products[i].description + " - " + products[i].price + "€ " + " / ud.";
        productItem.setAttribute("class", "product-item");
        productItem.setAttribute("id", "product-item");
        productItem.setAttribute("for", "product-item");

        let inputUnit = document.createElement("input");
        inputUnit.setAttribute("class", "input-unit");
        inputUnit.setAttribute("id", "input-unit-" + i);
        inputUnit.setAttribute("type", "number");
        inputUnit.setAttribute("required", "required");
        inputUnit.setAttribute("min", 0);
        inputUnit.setAttribute("max", products[i].stock);
        inputUnit.addEventListener("change", event => {
            products[i].units = (event.target.valueAsNumber);
            isValidUnit();
        });

        form.appendChild(productDiv);
        productDiv.appendChild(productItem);
        productDiv.appendChild(inputUnit);
    }
}

showArrayElements();

function getProductSubtotal () {
    let subtotal = 0;

    for(let i = 0; i < products.length; i++) {
        let inputObject = document.getElementById("input-unit-" + i).value;

        if (inputObject != '') {
            let inputValue = parseInt(inputObject);

            subtotal += products[i].price * inputValue;
        }  
    }

    return subtotal;
}

function getIVA () {
    let totalTaxes = 0;

    for(let i = 0; i < products.length; i++) {
        let inputObject = document.getElementById("input-unit-" + i).value;

        if (inputObject != '') {
            let inputValue = parseInt(inputObject);

            let subtotal = products[i].price * inputValue;

            if (products[i].tax == REGULAR_TYPE) {
                totalTaxes += subtotal * 21 / 100;
            } else if (products[i].tax == LOWER_TYPE) {
                totalTaxes += subtotal * 4 / 100;
            }
        }  
    }

    return totalTaxes;
}

function getTotal(subtotal, iva) {
    return subtotal + iva;
}

function getValues() {
    let subtotal = getProductSubtotal();
    let subtotalValue = document.getElementById("subtotal-value");
    subtotalValue.innerHTML = subtotal.toFixed(2);

    let taxes = getIVA();
    let ivaValue = document.getElementById("iva-value");
    ivaValue.innerHTML = taxes.toFixed(2);

    let total = getTotal(subtotal, taxes);
    let totalValue = document.getElementById("total-value");
    totalValue.innerHTML = total.toFixed(2);
}

button.addEventListener("click", getValues);