// Ejercicio 1
let firstArray = [25, 2.05, 1000, 63, 4.01, -9];

for (let i = 0; i < firstArray.length; i++) {
    console.log(firstArray[i]);
}

// Ejercicio 2
// let secondArray = [14, 2, 2.02, 63, 0, -9];

// let greaterThanZero = [];

// for (let i = 0; i < secondArray.length; i++) {
//     if(secondArray[i] > 0) {
//         greaterThanZero.push(secondArray[i]);
//     }
// }

// console.log(greaterThanZero);

// Ejercicio 3
// let thirdArray = [14, 2, 2.02, 63, 0, -9];

// let equalGreaterZero = [];
// let smallerThanZero = [];

// for (let i = 0; i < thirdArray.length; i++) {
//     if(thirdArray[i] >= 0) {
//         equalGreaterZero.push(thirdArray[i]);
//     } else {
//         smallerThanZero.push(thirdArray[i]);
//     }
// }

// console.log(equalGreaterZero);
// console.log(smallerThanZero);

// Ejercicio 4
// let fourthArray = [14, 2, 2.02, 63, 0, -9];

// for (let i = 0; i < fourthArray.length; i++) {
//     if(fourthArray[i] < 0) {
//         fourthArray.splice(i, 1);
//     }
// }

// Otra versión
// for (number in fourthArray) {
//     if(fourthArray[number] < 0) {
//         fourthArray.splice(number, 1);
//     }
// }

// console.log(fourthArray);

// Ejercicio 5
// let fifthArray = 
//     [ 
//         { 
//             id: 1, 
//             name: "Jhon", 
//         }, 
//         { 
//             id: 2, 
//             name: "Doe", 
//         }, 
//         { 
//             id: 3, 
//             name: "Clara", 
//         }, 
//         { 
//             id: 4, 
//             name: "Elisa", 
//         }, 
//         { 
//             id: 4, 
//             name: "Pedro", 
//         }, 
//     ]

// for(let i = fifthArray.length; i >= 0; i--) {
//     console.log(fifthArray[i]);
// }

// Ejercicio 6
// let sixthArray = 
//     [ 
//         { 
//             id: 1, 
//             name: "Jhon", 
//             age: 25, 
//         }, 
//         { 
//             id: 2, 
//             name: "Doe", 
//             age: 8, 
//         }, 
//         { 
//             id: 3, 
//             name: "Clara", 
//             age: 15, 
//         }, 
//         { 
//             id: 4, 
//             name: "Elisa", 
//             age: 30, 
//         }, 
//         { 
//             id: 4, 
//             name: "Pedro", 
//             age: 18,
//         }, 
//     ]

// for (person of sixthArray) {
//     if (person.age >= 18) {
//         console.log(person);
//     }
// }

// Ejercicio 7
// let seventhArray = 
//     [ 
//         { 
//             id: 1, 
//             name: "Jhon", 
//             age: 25, 
//         }, 
//         { 
//             id: 2, 
//             name: "Doe", 
//             age: 8, 
//         }, 
//         { 
//             id: 3, 
//             name: "Clara", 
//             age: 15, 
//         }, 
//         { 
//             id: 4, 
//             name: "Elisa", 
//             age: 30, 
//         }, 
//         { 
//             id: 4, 
//             name: "Pedro", 
//             age: 18,
//         }, 
//     ]

// let olderAge = [];
// let youngerAge = [];

// for (person of seventhArray) {
//     if (person.age >= 18) {
//         olderAge.push(person);
//     } else {
//         youngerAge.push(person);
//     }
// }

// console.log(olderAge);
// console.log(youngerAge);

// Ejercicio 8
// let hotelArray = 
//     [
//         {
//             hoteId: 1,
//             hotelName: "Jhon",
//             availableRooms: 25,
//             price: 10.20,
//         },
//         {
//             hoteId: 2,
//             hotelName: "Doe",
//             availableRooms: 8,
//             price: 4.25,
//         },
//         {
//             hoteId: 3,
//             hotelName: "Clara",
//             availableRooms: 15,
//             price: 14.30,
//         },
//         {
//             hoteId: 4,
//             hotelName: "Elisa",
//             availableRooms: 30,
//             price: 10,
//         },
//         {
//             hoteId: 4,
//             hotelName: "Pedro",
//             availableRooms: 10,
//             price: 8.10,
//         },
//     ]

// let lesserRooms = [];
// let greaterRooms = [];

// for (hotel of hotelArray){
//     if(hotel.availableRooms < 10) {
//         hotel.price += 10;

//         lesserRooms.push(hotel);
//     } else {
//         greaterRooms.push(hotel);
//     }
// }

// console.log(lesserRooms);
// console.log(greaterRooms);

// Ejercicio 9
// let hotelArrayTwo =
//     [
//         {
//             hoteId: 1,
//             hotelName: "Hotel 1",
//             availableRooms: 25,
//             price: 10.20,
//         },
//         {
//             hoteId: 2,
//             hotelName: "Hotel 2",
//             availableRooms: 8,
//             price: 4.25,
//         },
//         {
//             hoteId: 3,
//             hotelName: "Hotel 3",
//             availableRooms: 15,
//             price: 14.30,
//         },
//         {
//             hoteId: 4,
//             hotelName: "Hotel 4",
//             availableRooms: 30,
//             price: 10,
//         },
//         {
//             hoteId: 5,
//             hotelName: "Hotel 5",
//             availableRooms: 10,
//             price: 8.10,
//         },
//     ]

// let lesserRooms = [];

// for (hotel of hotelArrayTwo) {
//     if(hotel.availableRooms < 10) {
//         hotel.price += 10;

//         lesserRooms.push(hotel);
//     }
// }

// console.log(lesserRooms);

// Ejercicio 10
// let hotelArrayThree =
//     [ 
//         { 
//             hoteId: 1, 
//             hotelName: "Hotel 1", 
//             availableRooms: 25, 
//             price: 10.20, 
//         }, 
//         { 
//             hoteId: 2, 
//             hotelName: "Hotel 2", 
//             availableRooms: 8, 
//             price: 4.25, 
//         }, 
//         { 
//             hoteId: 3, 
//             hotelName: "Hotel 3", 
//             availableRooms: 15, 
//             price: 14.30, 
//         }, 
//         { 
//             hoteId: 4, 
//             hotelName: "Hotel 4",
//             availableRooms: 30, 
//             price: 10, 
//         }, 
//         { 
//             hoteId: 5, 
//             hotelName: "Hotel 5",
//             availableRooms: 10,
//             price: 8.10, 
//         }, 
//     ]

// function hotelOneExists() {
//     for (hotel of hotelArrayThree) {
//         let textInput = document.getElementById('textBox');
        
//         if(hotel.hotelName === "Hotel 1") {
//             textInput.value = "El hotel Hotel 1 existe";

//             break;
//         } else {
//             textInput.value = "El hotel Hotel 1 no existe";
//         }
//     }
// }

// let clickButton = document.getElementById('myButton');
// clickButton.addEventListener('click', hotelOneExists);