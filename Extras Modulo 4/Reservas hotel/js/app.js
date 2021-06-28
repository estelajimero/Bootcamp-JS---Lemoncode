function finalPrice() {
    let roomType = document.getElementById("room-type-input").value; 
    let roomPrice = 0;
    
    switch (roomType) {
        case "standard":
            roomPrice = 100;
            break;
        
        case "junior":
            roomPrice = 120;
            break;
        
        case "suite":
            roomPrice = 150;
            break;
    }

    let numberNights = parseInt(document.getElementById("nights-number").value);

    if(document.getElementById("spa-included").checked) {
        roomPrice += 20;
    }
    
    let roomCapacity = document.getElementById("room-capacity").value;
    let capacityRatio = 0;

    switch (roomCapacity) {
        case "single":
            capacityRatio = 0.75;
            break;
        
        case "double":
            capacityRatio = 1;
            break;
        
        case "triple":
            capacityRatio = 1.25;
            break;
    }

    let parkingNights = parseInt(document.getElementById("parking-nights").value);
    let parkingPrice = 10 * parkingNights;

    let total = "El precio total de la reserva es " + (((roomPrice * capacityRatio) * numberNights) + parkingPrice) + "€";

    document.getElementById("final-price").innerText = total;
}

// document.getElementById("total").addEventListener("click", finalPrice);

document.getElementById("room-type-input").addEventListener("change", finalPrice);
document.getElementById("spa-included").addEventListener("change", finalPrice);
document.getElementById("no-spa").addEventListener("change", finalPrice);
document.getElementById("room-capacity").addEventListener("change", finalPrice);
document.getElementById("nights-number").addEventListener("change", finalPrice);
document.getElementById("parking-nights").addEventListener("change", finalPrice);

finalPrice();