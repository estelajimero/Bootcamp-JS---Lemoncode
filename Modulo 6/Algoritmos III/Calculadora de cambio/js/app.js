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

    // Refactorizar bucles en uno
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

    // Tres bucles según propiedades del objeto
    // for (bill of [...new Set(change.billChange)]) {
    //     let bills = change.billChange.filter(a => a === bill).length;

    //     let parBillHtml = document.createElement('p');
    //     parBillHtml.className = "p";

    //     parBillHtml.innerHTML = bills + " billetes de " + bill + "€.";

    //     divContainer.appendChild(parBillHtml);
    // }

    // for (coin of [...new Set(change.euroChange)]) {
    //     let coins = change.euroChange.filter(a => a === coin).length;

    //     let parCoinHtml = document.createElement('p');
    //     parCoinHtml.className = "p";

    //     parCoinHtml.innerHTML = coins + " monedas de " + coin + "€.";

    //     divContainer.appendChild(parCoinHtml);
    // }

    // for (cent of [...new Set(change.centChange)]) {
    //     let cents = change.centChange.filter(a => a === cent).length;

    //     let parCentHtml = document.createElement('p');
    //     parCentHtml.className = "p";

    //     parCentHtml.innerHTML = cents + " monedas de " + cent + " céntimos.";

    //     divContainer.appendChild(parCentHtml);
    // }

    // El monstruo de bucles y condicionales :(
    // for (let i = 0; i < change.billChange.length; i++) {
    //     if (change.billChange[i] !== valueBill) {
    //         if (valueBill !== 0 || i === change.billChange.length - 1) {
    //             let parBillHtml = document.createElement('p');
    //             parBillHtml.className = "p";

    //             if (i === change.billChange.length - 1 && bills === 0) {
    //                 parBillHtml.innerHTML = "1 billete de " + change.billChange[i] + "€.";
    //             } else {
    //                 parBillHtml.innerHTML = bills + " billetes de " + valueBill + "€.";
    //             }

    //             divContainer.appendChild(parBillHtml);
    //         }

    //         valueBill = change.billChange[i];
    //         bills = 1;
    //     } else {
    //         bills++;

    //         if (i === change.billChange.length -1 ) {
    //             let parBillHtml = document.createElement('p');
    //             parBillHtml.className = "p";

    //             parBillHtml.innerHTML = bills + " billetes de " + valueBill + "€.";

    //             divContainer.appendChild(parBillHtml);
    //         }
    //     }
    // }
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
