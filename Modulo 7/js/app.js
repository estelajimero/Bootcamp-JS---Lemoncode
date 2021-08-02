// Validar un IBAN
/** Caso 1 **/
// let iban1 = "ES6600190020961234567890";

// let patternIban1 = /^[A-Z]{2}\d{22}$/;

// console.log(patternIban1.test(iban1));

/** Caso 2 **/
let ibanValues = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];

let patternIbanValues = /^[A-Z]{2}(\d{2}\s?)(\d{4}\s?)(\d{4}\s?)(\d{4}\s?)(\d{4}\s?)\d{4}$/;

ibanValues.forEach(value => {
    console.log(patternIbanValues.test(value));
})

/** Caso 3 **/
let iban1 = "ES6600190020961234567890";

let patternIban1 = /^([A-Z]{2})(\d{2})\d{20}$/;

console.log(patternIban1.exec(iban1));

// Validar matrículas de coche
/** Caso 1 y 2 **/
let carValues = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

let patternCar = /^(\d{4})(\s|-?)([A-Z]{3})$/;

carValues.forEach(value => {
    console.log(`Regex match with ${value}?`, patternCar.test(value));
    console.log(patternCar.exec(value));
})

/// OPCIONALES

// Extraer imágenes de un fichero HTML
/** Caso 1 */
let imgUrl = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'

let patternUrl = /src=["|'](.*?)["|']/;

console.log(patternUrl.exec(imgUrl));

/** Caso 2 */
let htmlLayout = 
    '<html>' +
        '<body>' +
            '<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>' +
            '<h1>ejemplo</h1>' +
            '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>' +
        '</body>' +
    '</html>';

let patternHTML = /<img.*?src=["|'](.*?)["|']/;

console.log(patternHTML.test(htmlLayout));
console.log(patternHTML.exec(htmlLayout));

// Validar sintaxis tarjeta de crédito
/** Caso 1 y 2 */
let mastercardValues = ["5299 64000 000 000", "5299-64000-000-000", "529964000000000"];

let patternCreditCard = /^(5[0-5]{1}\d{2})(\s|-)?(\d{5})(\s|-)?(\d{3})(\s|-)?(\d{3})(\s|-)?|\d{14}$/;

mastercardValues.forEach(value => {
    console.log(`Regex match with ${value}? ->`, patternCreditCard.test(value));
    console.log(patternCreditCard.exec(value));
})


// Buscar Expresiones regulares

/** 1 y 2 */
let password = ["La;:%Y4MpxGW", "A7FqmYpQemXR"];

let complexPassPattern = /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
let mediumPassPattern = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;

password.forEach(value => {
    console.log(`Regex match with ${value}? ->`, complexPassPattern.test(value));
    console.log(`Regex match with ${value}? ->`, mediumPassPattern.test(value))
})

/** 3 */
let urls = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net", "www.lemoncode"];

let urlsPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

urls.forEach(value => {
    console.log(`Regex match with ${value}? ->`, urlsPattern.test(value));
})

/** 4 */
let hexColors = ["#C7FFE0", "#fff66c", "#CBA9E55"];

let hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;

hexColors.forEach(value => {
    console.log(`Regex match with ${value}? ->`, hexPattern.test(value));
})

