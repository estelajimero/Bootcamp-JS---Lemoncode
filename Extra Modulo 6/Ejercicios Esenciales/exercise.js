// Funciones básicas
// console.log("------ FUNCIONES BÁSICAS ------");
// // 1. 
// let showConsole = () => {
//     console.log("Hola Mundo");
// }

// showConsole();

// // 2.
// let greetings = (name) => {
//     let greet = "Hello " + name;

//     return greet;
// }

// console.log(greetings("Estela"));

// // 3.
// let string = "Programar es muy difícil, pero a veces me salen las cositas bien";

// let toUpperCase = (str) => {
//     return str.toUpperCase();
// }

// console.log(toUpperCase(string));

// // 4.
// let toLowerCase = (str) => {
//     return str.toLowerCase();
// }

// console.log(toLowerCase(string));

// // 5.
// let add = (a, b) => {
//     return a + b;
// }

// console.log(add(2, 4));

// // 6.
// let concatenate = (strOne, strTwo, strThree) => {
//     let result = strOne + strTwo + strThree;

//     return result;
// }

// console.log(concatenate("A Pepito le gusta ", "mucho ", "comer sardinas."));

// // 7.
// let newObject = {};

// let getNullId = (object) => {
//     object.id = null;

//     return object;
// }

// console.log(getNullId(newObject));

// // Funciones con if/else, switches y comprobaciones
// console.log("------ FUNCIONES IF/ELSE, SWITCHES Y COMPROBACIONES ------");

// 1.
// let isNullOrUndefined = (par) => {
//     if (par == null) {
//         console.log("El parámetro es null o undefined");
//     }

//     return par;
// }

// isNullOrUndefined();

// // con typeof
// let isNull = (par) => {
//     if (typeof par === 'undefined' || typeof par === null) {
//         console.log("El parámetro es null o undefined");
//     }

//     return par;
// }

// isNull();

// // 2. 
// let typeNumber = (num) => {
//     if (num >= 0) {
//         console.log("El número ", num, " es positivo");
//     } else {
//         console.log("El número ", num, " es negativo");
//     }
// }

// let typeNumber = (num) => num >= 0 ? console.log("El número ", num, " es positivo") : console.log("El número ", num, " es negativo");

// typeNumber(5);
// typeNumber(-10);

// // 3.
// let checkNumber = (num) => {
//     if (num > 100) {
//         console.log("El número ", num, " es mayor que 100.");
//     } else if (num < 100) {
//         console.log("El número ", num, " es menor que 100.");
//     } else {
//         console.log("El número es 100.");
//     }
// }

// checkNumber(200);
// checkNumber(100);
// checkNumber(55);

// 4. 
// let hasNameProperty = (obj) => {
//     if ('name' in obj) {
//         console.log("El objeto tiene propiedad name.");
//     } else {
//         console.log("El objeto no tiene propiedad name.");
//     }
// }

// let newObj = {
//     id: 34,
//     name: "Hitachi",
//     code: 87543
// }

// let objTwo = {
//     id: 29,
//     code: 26157
// }

// hasNameProperty(newObj);
// hasNameProperty(objTwo);

// 5.
// let isDivisible = (numOne, numTwo) => numOne / numTwo ? console.log(true) : console.log(false);

// isDivisible(4, 2);
// isDivisible(0, 2);

// // // 6. 
// let checkCharNumber = (str, num) => {
//     if (str.length === num) {
//         console.log("El string tiene el mismo número de caracteres que el parámetro num: ", num);
//     } else {
//         console.log("El string tiene un número de caracteres distinto del parámetro num: ", str.length);
//     }
// }

// let stringOne = "Hola Don Pepito";
// let stringTwo = "Hola Don José";
// let numOne = 15;

// checkCharNumber(stringTwo, numOne);

// // 7. 
// let checkWeekDay = (day) => {
//     switch (day) {
//         case 1: console.log("Hoy es lunes");
//         break;

//         case 2: console.log("Hoy es martes");
//         break;

//         case 3: console.log("Hoy es miércoles");
//         break;

//         case 4: console.log("Hoy es jueves");
//         break;

//         case 5: console.log("Hoy es viernes");
//         break;

//         case 6: console.log("Hoy es sábado");
//         break;

//         case 7: console.log("Hoy es domingo");
//         break;
//     }

//     return day;
// }

// checkWeekDay(5);

// // 8.
// let checkMonth = (month) => {
//     switch (month) {
//         case 1: console.log("Estamos en enero");
//         break;

//         case 2: console.log("Estamos en febrero");
//         break;

//         case 3: console.log("Estamos en marzo");
//         break;

//         case 4: console.log("Estamos en abril");
//         break;

//         case 5: console.log("Estamos en mayo");
//         break;

//         case 6: console.log("Estamos en junio");
//         break;

//         case 7: console.log("Estamos en julio");
//         break;

//         case 8: console.log("Estamos en agosto");
//         break;

//         case 9: console.log("Estamos en septiembre");
//         break;

//         case 10: console.log("Estamos en octubre");
//         break;

//         case 11: console.log("Estamos en noviembre");
//         break;

//         case 12: console.log("Estamos en diciembre");
//         break;
//     }

//     return month;
// }

// checkMonth(5);
// checkMonth(10);

// // // 9.
// let longerArr = (arr1, arr2) => arr1.length > arr2.length ? console.log("El primer array es el más largo: ", arr1) : console.log("El segundo array es el más largo: ", arr2);

// let arrLong = [10, 23, 18, 0, 32];
// let arrShort = ["a", "b", "d"];

// longerArr(arrLong, arrShort);

// // // 10.
// let firstElement = (arr1, arr2) => {
//     if(arr1[0] === arr2[0]) {
//         console.log("El primer elemento de ambos arrays es igual");
//     } else {
//         console.log("El primer elemento de ambos arrays es diferente");
//     }
// }

// firstElement(arrShort, arrLong);

// // Funciones con arrays
// // console.log("------ FUNCIONES CON ARRAYS ------");

// // 1.
// let getSecondElement = (arr) => !arr[1] ? console.log("undefined") : console.log("El segundo elemento es: ", arr[1]);

// let arr1 = [1, 2, 3, 5];
// let arr2 = [1, , 8, 2];

// getSecondElement(arr1);
// getSecondElement(arr2);

// // // 2.
// let getLetter = (str) => str.slice(-1);


// console.log(getLetter("Devuélveme la última letra"));

// // // 3.
// let shiftElements = (arr) => {
//     [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]

//     return console.log(arr);
// }

// shiftElements(arr1);

// Funciones con bucles
console.log("------ FUNCIONES CON BUCLES ------");

// 1.
// let showText = (num, text) => {
//     let arr = [];

//     for (let i = 0; i < num; i++) {
//         arr.push(text);
//     }

//     return arr;
// }

// console.log(showText(3, "Hola Carlitos"));

// // 2.
// let getProperty = (obj) => {
//     let count = 0;

//     for (prop in obj) {
//         count++;
//     }

//     return count;
// }

// let reserva1 = { id: 1, price: 24.50, client: "Caroline" };

// console.log(getProperty(reserva1));

// // 3.
// let showProperty = (obj) => {
//     let values = [];

//     for (prop in obj) {
//         values.push(obj[prop]);
//     }

//     return values;
// }

// console.log(showProperty(reserva1));

// // 4
// let multiplyArr = (arr, num) => {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i] * num;
//     }

//     return result;
// }

// let arr1 = [485, 2, 59];

// console.log(multiplyArr(arr1, 23));

// // 5.
// let getChar = (str, char) => {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }

//     return count;
// }

// let str1 = "Una vaca rosita y blanca";

// console.log(getChar(str1, "a"));
// console.log(getChar(str1, "v"));

// // 6.
// let showArrElements = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// showArrElements(arr1);

// // 7. 
// let showReverseArr = (arr) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }

// showReverseArr(arr1);

// 8. 
// let getNum = (arr, num) => {
//     let numbers = {
//         greater: 0,
//         smaller: 0
//     };

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//            numbers.greater++;
//         } else {
//             numbers.smaller++;
//         }
//     }

//     return numbers;
// }

// let arr1 = [485, 2, 59]

// console.log(getNum(arr1, 40));

// // 9.
// let hasElement = (arr1, arr2) => {
//     let result = true;

//     for (element1 of arr1) {
//         if (arr2.indexOf(element1) !== -1) {
//             result = false;

//             break;
//         }
//     }

//     return result;
// }

// let arr2 = [55, 32, 20, 1];
// let arr3 = [55, "c", 22, 0];

// console.log(hasElement(arr2, arr3));

// // 10.
// let changeElements = (arr1, arr2) => {
//     let arr3 = [];

//     for (element1 of arr1) {
//         arr3.push(element1);
//     }

//     arr1 = [];

//     for (element2 of arr2) {
//         arr1.push(element2);
//     }

//     arr2 = [];

//     for (element3 of arr3) {
//         arr2.push(element3);
//     }

//     let arrObj = {
//         arr1: arr1,
//         arr2: arr2
//     };

//     return arrObj;
// }

// // Más simple
// let changeElementsEasier = (arr1, arr2) => {
//     let arr3 = arr1;
//     arr1 = arr2;
//     arr2 = arr3;

//     let arrObj = {
//         arr1: arr1,
//         arr2: arr2
//     };

//     return arrObj;
// }

// console.log(changeElements(arr2, arr3));
// console.log(changeElementsEasier(arr2, arr3));

// 11.
// let saveProperty = (arr) => {
//     let arrObj = {};

//     for (let i = 0; i < arr.length; i++) {
//         arrObj["prop" + i] = arr[i];
//     }

//     return arrObj;
// }

// let arr2 = [55, 32, 20, 1];

// console.log(saveProperty(arr2));

// 12.
// let iterateFrom = (arr, num) => {
//     for (let i = num; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// let arr2 = [55, 32, 20, 1];

// iterateFrom(arr2, 2);

// 13.
// let showInConsole = (arr) => {
//     for (elem of arr) {
//         console.log(elem);
//     }
// }

// showInConsole(arr2);

// 14.
// let hasString = (arr, str) => arr.indexOf(str) === -1 ? false : true;

// let hasString = (arr, str) => {
//     let result = false;

//     for (elem of arr) {
//         if (elem === str) {
//             result = true;
//         }
//     }

//     return result;
// }

// let arrStr = ["Fulanita", "Menganita", "Tolili"];

// console.log(hasString(arrStr, "Tolili"));

// 15.
// let getTranslation = (fruta) => {
//     let frutas = ["naranja", "piña", "manzana", "higo"];
//     let fruits = ["orange", "pineapple", "apple", "fig"];

//     return fruits[frutas.indexOf(fruta)];
// }

// let getTranslationReverse = (fruit) => {
//     let frutas = ["naranja", "piña", "manzana", "higo"];
//     let fruits = ["orange", "pineapple", "apple", "fig"];

//     return frutas[fruits.indexOf(fruit)];
// }

// console.log(getTranslation("higo"));
// console.log(getTranslationReverse("fig"));

// 16.
// let reverseText = (text) => {
//     let revStr = "";

//     for (let i = text.length - 1; i >= 0; i--) {
//         revStr += text[i];
//     }

//     return revStr;
// }

// console.log(reverseText("hola mundo"));

// // 17.
let upperLowCase = (text) => {
    let untidyStr = "";
    let yesNo = false;

    for(let i = 0; i < text.length; i++) {
        if (yesNo) {
            untidyStr += text[i].toLowerCase();
        } else {
            untidyStr += text[i].toUpperCase();
        }

        if (text[i] !== " ") {
            yesNo = !yesNo;
        }
    }

    return untidyStr;
}

console.log(upperLowCase("este es mi texto"));


// 18.
// let getAllArr = (arr) => {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             newArr.push(arr[i][j]);
//         }
//     }

//     return newArr;
// }

// let arrTest = [ ["Hola", "Adiós"], ["Samuel", "Margarita"], [19, 28] ];

// console.log(getAllArr(arrTest));

// Otra forma
// let getSubarrOfArr = (arr) => {
//     let arrResult = [];

//     for (element of arr) {
//         for (let i = 0; i < element.length; i++) {
//             arrResult.push(element[i])
//         }
//     }

//     return arrResult;
// }

// console.log(getSubarrOfArr(arrTest));

// Array de elementos complejos
// let getComplexArr = (arr) => {
//     let result = [];

//     for (element of arr) {
//         for (prop in element) {
//             for (value of element[prop]) {
//                 result.push(value);
//             }
//         }
//     }

//     return result;
// }

// let myTeam = [
//     {
//         availability: new Array(8).fill(true)
//     },
//     {
//         availability: new Array(8).fill(false)
//     },
//     {
//         availability: new Array(8).fill(true)
//     },
//     {
//         availability: new Array(8).fill(false)
//     },
// ];

// console.log(getComplexArr(myTeam));
