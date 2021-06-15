// let hotel = {
//     name: "Vincci Posada",
//     location: "Málaga",
//     img: 
//     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vidaeconomica.com%2Fwp-content%2Fuploads%2F2019%2F06%2FPatio3.jpg&f=1&nofb=1",
// };

// document.getElementById('hotel-name').innerHTML = "Hotel " + hotel.name;
// document.getElementById('hotel-location').innerHTML = hotel.location;
// document.getElementById('hotel-img').src = hotel.img;

// let rating = prompt("Puntúe del 1 al 5 este hotel");
// document.getElementById('rating').innerHTML = rating + " estrellas";

// let anonymous = confirm("¿Quiere que su reseña sea anónima");
// document.getElementById('anonymous').checked = anonymous;

let hoteles = {
        Vincci: {
            name: "Vincci Posada",
            location: "Málaga",
            img: 
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vidaeconomica.com%2Fwp-content%2Fuploads%2F2019%2F06%2FPatio3.jpg&f=1&nofb=1",
        },

        Miramar: {
            name: "Miramar",
            location: "Málaga",
            img: 
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QRxhowVHZ4wsGI-OqXiAZwHaE8%26pid%3DApi&f=1",
        },

        Ibis: {
            name: "Ibis Budget",
            location: "Málaga",
            img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Flastminute%2Fimage%2Fupload%2Fc_scale%2Cw_630%2Fq_auto%2Fv1549055910%2F6350_sl_02_p_1024x768_euezkg.jpg&f=1&nofb=1",
        }
};

let reviewedHotel = prompt(
    "Indique el hotel sobre el que quiere realizar la reseña: Vincci, Miramar o Ibis Budget"
);
    
document.getElementById('hotel-name').innerHTML = "Hotel " + hoteles[reviewedHotel].name;
document.getElementById('hotel-location').innerHTML = hoteles[reviewedHotel].location;
document.getElementById('hotel-img').src = hoteles[reviewedHotel].img;

let stars = {
    una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
     cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

let rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
document.getElementById('rating').innerHTML = stars[rating];

let anonymous = confirm("¿Quiere que su reseña sea anónima");
document.getElementById('anonymous').checked = anonymous;