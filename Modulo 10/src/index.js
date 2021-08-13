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
const arrOfStr = ["Potato", "Pet", "Pineapple"];
const arrOfStr2 = ["Potato", "Eggs", "Pineapple"];

const firstEqual = (char, strings) => strings.every(string => string.startsWith(char));

console.log(firstEqual( "P" , arrOfStr));
console.log(firstEqual( "P" , arrOfStr2));

/** longest */
const arr1 = [21, 45, 0, 2, 78];
const arr2 = ["Cat", "Dog", "Bird", "Fish", "Turtle", "Eagle"];

const longest = (...arr) => arr.reduce((previous, current) => previous.length > current.length ? previous : current); 

console.log(longest(arr1, arr2));

/** searchInStringV1 */
const str1 = "The quick brown fox jumps over the lazy dog";

const searchInStringV1 = (str, char) => {
    char = char.toLowerCase();
    str = str.toLowerCase();
    return Array.from(str).reduce((result, letter) => letter === char ? result + 1 : result, 0);
}

console.log(searchInStringV1(str1, "e"));
console.log(searchInStringV1(str1, "T"));

/** searchInStringV2 */
const str2 = "The quick brown fox jumps over the lazy dog";

const searchInStringV2 = (str, char) => {
    char = char.toLowerCase();
    str = str.toLowerCase();
    return Array.from(str).filter(letter => letter === char).length;
}

console.log(searchInStringV2(str2, "o"));
console.log(searchInStringV2(str2, "E"));

/** sortCharacters */
const str3 = "The quick brown fox jumps over the lazy dog";

const sortCharacters = (str) => {
    return Array.from(str.toLowerCase())
        .filter(a => a !== ' ')
        .sort((a, b) => a > b ? 1 : -1);
}

console.log(sortCharacters(str3));

/** shout */
const shout = (...words) => {
    return words.map(word => `¡${word.toUpperCase()}!`);
}

console.log(shout("cheese", "eggs", "oil"));

/** Shopping list */
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// A
const getTax = (tax, products) => products.map(product => ({...product, tax: (product.price * 0.21).toFixed(2)}));

console.log(getTax("tax", shoppingCart));

// B
const orderShoppingCart = (products) => products.sort((a, b) => a.units < b.units ? 1 : -1);

console.log(orderShoppingCart(shoppingCart));

// C
const getSubtotal = (product) => {
    return product.filter((product => product.category === "Droguería"))
                    .reduce((sum, product) => sum + (product.price * product.units), 0);
}

console.log(getSubtotal(shoppingCart));

// D 

const getOrderedList = (products) => {
    return products.sort((a, b) => a.category > b.category ? 1 : -1)
                    .map((product => (product.product + ": " + ((product.price * product.units) * 0.21).toFixed(2) + "€")));
}

console.log(getOrderedList(shoppingCart));