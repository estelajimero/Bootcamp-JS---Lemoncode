/** hasId */
const object = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
};

const object2 = {
    name: "Estela",
    surname: "Jiménez",
    age: 34,
}

const hasId = ({ id }) => id ? true : false;

console.log(hasId(object));
console.log(hasId(object2));

/** head */
const animals = ["Cat", "Dog", "Penguin", "Whale"];

const head = ([ first ]) => first;
console.log(head(animals));

/** tail */
const tail = ([ , ...restItems ]) => restItems;
console.log(tail(animals));

/** swapFirstToLast */ 
const swapFirstToLast = ([ first , ...rest ]) => [...rest , first];
console.log(swapFirstToLast(animals));

/** excludedId */
const objectWithId = {
    id: 2876,
    quantity: 5,
    name: "milk",
    department: "dairy"
};

const excludedId = ({ id, ...rest }) => rest;
console.log(excludedId(objectWithId));

/** wordsStartingWithA */
const words = ["Apple", "Orange", "Kiwi", "Ananas", "Apricot", "Strawberry"];

const wordsStartingWithA = words => words.filter(word => word.startsWith("A"));
console.log(wordsStartingWithA(words));

/** concat */
const concat = words => words.join(" | ");
console.log(concat(words));

/** multArray */
const numbers = [1, 4, 5, 2];

const multArray = (x, arr) => {
    return arr.map(element => element * x);
}

console.log(multArray(2, numbers));

/** calcMult */
const calcMult = (...numbers) => {
    return numbers.reduce((previous, current) => previous * current); 
}

console.log(calcMult(5, 2, 3));

// Ejercicios extra

/** swapFirstSecond */
const newArr = ["Jaime", 32, "Fish", 67];

const swapFirstSecond = ([ first, second, ...rest ]) => [ second, first, ...rest ];
console.log(swapFirstSecond(newArr));

/** firstEqual */

