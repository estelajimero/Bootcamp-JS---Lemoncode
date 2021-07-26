let availableChange = 
    {
        billChange: [200, 100, 50, 20, 10, 5],
        euroChange: [2, 1],
        centChange: [0.50, 0.20, 0.10, 0.05, 0.02, 0.01]
    };

let getChange = (obj, paid, total) => { 
    let result = {
        billChange: [],
        euroChange: [],
        centChange: [],
        difference: 0
    };

    let difference = paid - total;

    result.difference = difference;

    for (prop in obj) {
        for (value of obj[prop]) {
            let temp = Math.trunc(difference / value);

            for (let i = 0; i < temp; i++) {
                result[prop].push(value);
            }

            difference -= value * temp;
        }
    }

    return result;
}

let createPar = (change) => {
    let divContainer = document.getElementById("result-wrapper");

    for (type in change) {
        if (type !== "difference") {
            for (amount of [...new Set(change[type])]) {
                let count = change[type].filter(a => a === amount).length;
    
                let parRefundHtml = document.createElement('p');
                parRefundHtml.className = "p";

                switch (type) {
                    case "billChange": 
                        parRefundHtml.innerHTML = count + " billetes de " + amount + "€.";
                        break;

                    case "euroChange":
                        parRefundHtml.innerHTML = count + " monedas de " + amount + "€.";
                        break;
                    
                    case "centChange":
                        parRefundHtml.innerHTML = count + " monedas de " + amount + " céntimos.";
                        break;
                }
    
                divContainer.appendChild(parRefundHtml);
            }
        }
    }
}

let eraseValues = () => {
    let divContainer = document.getElementById("result-wrapper");
    divContainer.innerHTML = "";
}

let showChange = () => {
    eraseValues();

    let total = document.getElementById("total-input").value;
    let paidMoney = document.getElementById("money").value;
    
    let change = getChange(availableChange, paidMoney, total);

    let difference = document.getElementById("result-input");
    difference.value = change.difference;

    createPar(change);
}

let button = document.getElementById("calculate");
button.addEventListener('click', showChange);
