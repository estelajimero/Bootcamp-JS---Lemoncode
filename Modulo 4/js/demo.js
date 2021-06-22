function add() {
    if(document.getElementById("number-one").value == "" || document.getElementById("number-two").value == "") {
        alert("Rellene ambos campos");
    } else {
        let numberOne = parseInt(document.getElementById("number-one").value);
        let numberTwo = parseInt(document.getElementById("number-two").value);

        document.getElementById("result").innerHTML = numberOne + numberTwo;
    }
}

function subtract() {
    if(document.getElementById("number-one").value == "" || document.getElementById("number-two").value == "") {
        alert("Rellene ambos campos");
    } else {
        let numberOne = parseInt(document.getElementById("number-one").value);
        let numberTwo = parseInt(document.getElementById("number-two").value);

        document.getElementById("result").innerHTML = numberOne - numberTwo;
    }
}

function multiply() {
    if(document.getElementById("number-one").value == "" || document.getElementById("number-two").value == "") {
        alert("Rellene ambos campos");
    } else {
        let numberOne = parseInt(document.getElementById("number-one").value);
        let numberTwo = parseInt(document.getElementById("number-two").value);

        document.getElementById("result").innerHTML = (numberOne * numberTwo).toFixed(2);
    }
}

function divide() {
    if(document.getElementById("number-one").value == "" || document.getElementById("number-two").value == "") {
        alert("Rellene ambos campos");
    } else {
        let numberOne = parseInt(document.getElementById("number-one").value);
        let numberTwo = parseInt(document.getElementById("number-two").value);

        document.getElementById("result").innerHTML = (numberOne / numberTwo).toFixed(2);
    }
}

function reset() {
    document.getElementById("number-one").value = "";
    document.getElementById("number-two").value = "";
    document.getElementById("result").innerHTML = "";
}

document.getElementById("add").addEventListener("click", add);

document.getElementById("subtract").addEventListener("click", subtract);

document.getElementById("multiply").addEventListener("click", multiply);

document.getElementById("divide").addEventListener("click", divide);

document.getElementById("reset").addEventListener("click", reset);