let operand = 0;
let partialResult = 0;
let operator = "";

function getInput(inputId) {
    return parseInt(document.getElementById(inputId).value);
}

function inputReset() {
    document.getElementById("number").value = "";
}

function updatePartialResult() {
    switch (operator) {
        case "+":
            partialResult += operand;
            break;
        case "-":
            partialResult -= operand;
            break;
        case "*":
            partialResult *= operand;
            break;
        case "/":
            partialResult /= operand;
            break;
        default:
            partialResult = operand;
    }
}

function add() {
    if(isNaN(getInput("number"))) {
        alert("Campo vacío, introduzca un número");
    } else {
        operand = getInput("number");
        
        updatePartialResult();
        
        operator = "+";

        inputReset();
    }
}

function subtract() {
    if(isNaN(getInput("number"))) {
        alert("Campo vacío, introduzca un número");
    } else {
        operand = getInput("number");
        
        updatePartialResult();
        
        operator = "-";

        inputReset();
    }
}

function multiply() {
    if(isNaN(getInput("number"))) {
        alert("Campo vacío, introduzca un número");
    } else {
        operand = getInput("number");
        
        updatePartialResult();
        
        operator = "*";

        inputReset();
    }
}

function divide() {
    if(isNaN(getInput("number"))) {
        alert("Campo vacío, introduzca un número");
    } else {
        operand = getInput("number");
        
        updatePartialResult();
        
        operator = "/";

        inputReset();
    }
}

function equal() {
    operand = getInput("number");

    updatePartialResult();

    document.getElementById("result").innerHTML = partialResult;
}

function reset() {
    inputReset();
    document.getElementById("result").innerHTML = "";
}

document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("equal").addEventListener("click", equal);
document.getElementById("reset").addEventListener("click", reset);