1º Dado el siguiente array mostrar sus datos de 0 al valor final del array con los bucles dados en clase (while,
do while, for...)

js [25, 2.05, 1000, 63, 4.01, -9]

2º Dado el siguiente array de números, mostrar aquellos que sean mayores a 0

js [14, 2, 2.02, 63, 0, -9]

3º Dado el array del ejercicio anterior separa ahora en un array los números mayores o iguales a 0, y en otro
los que sean menores que 0, y mostrar los arrays con los resultados.

js [14, 2, 2.02, 63, 0, -9]

4º Dado el array del ejercicio anterior, borra del array ORIGINAL, los que sean menores a 0 y muestra el array
resultante. Pista: Utiliza el método splice usado en clase.

js [14, 2, 2.02, 63, 0, -9]

5º Dado el siguiente array de objetos muestra en sentido inverso (del valor final al valor inicial).

js 
    [ 
        { id: 1, name: "Jhon", }, 
        { id: 2, name: "Doe", }, 
        { id: 3, name: "Clara", }, 
        { id: 4, name: "Elisa", }, 
        { id: 4, name: "Pedro", }, 
    ]

6º Dado el siguiente array de objetos, mostrar solo aquellos que tengan una edad mayor o igual a 18.

js 
    [ 
        { id: 1, name: "Jhon", age: 25, }, 
        { id: 2, name: "Doe", age: 8, }, 
        { id: 3, name: "Clara", age: 15, }, 
        { id: 4, name: "Elisa", age: 30, }, 
        { id: 4, name: "Pedro", age: 18, }, 
    ]

7º Dado el array de objetos del ejercicio anterior, insertar en un array aquellos que tengan una edad mayor o
igual a 18 y los menores a 18 en otro array y mostrar los resultados.

js 
    [ 
        { id: 1, name: "Jhon", age: 25, }, 
        { id: 2, name: "Doe", age: 8, }, 
        { id: 3, name: "Clara", age: 15, }, 
        { id: 4, name: "Elisa", age: 30, }, 
        { id: 4, name: "Pedro", age: 18, }, 
    ]

8º Dado un array de hoteles, incrementa en 10 euros su precio aquellos que tengan menos de 10 habitaciones
disponibles. Muestra tanto aquellos que cumplan dicha condición como los que no.
Pista: Usa funciones cuando sea necesario.

    [
        {
            hoteId: 1,
            hotelName: "Jhon",
            availableRooms: 25,
            price: 10.20,
        },
        {
            hoteId: 2,
            hotelName: "Doe",
            availableRooms: 8,
            price: 4.25,
        },
        {
            hoteId: 3,
            hotelName: "Clara",
            availableRooms: 15,
            price: 14.30,
        },
        {
            hoteId: 4,
            hotelName: "Elisa",
            availableRooms: 30,
            price: 10,
        },
        {
            hoteId: 4,
            hotelName: "Pedro",
            availableRooms: 10,
            price: 8.10,
        },
    ]

9º Dado un array de hoteles, incrementa en 10 euros su precio aquellos que tengan menos de 10 habitaciones
disponibles. Muestra solo aquellos que cumplan la condición en un array nuevo.

    [
        {
            hoteId: 1,
            hotelName: "Hotel 1",
            availableRooms: 25,
            price: 10.20,
        },
        {
            hoteId: 2,
            hotelName: "Hotel 2",
            availableRooms: 8,
            price: 4.25,
        },
        {
            hoteId: 3,
            hotelName: "Hotel 3",
            availableRooms: 15,
            price: 14.30,
        },
        {
            hoteId: 4,
            hotelName: "Hotel 4",
            availableRooms: 30,
            price: 10,
        },
        {
            hoteId: 5,
            hotelName: "Hotel 5",
            availableRooms: 10,
            price: 8.10,
        },
    ]

10º Dado el siguiente array de hotels y el html con un input de texto y un botón. Que muestre el siguiente
mensaje si existe el hotel: El hotel Hotel 1 existe. Y mostrar el mensaje: El hotel Hotel 1 no existe en caso
contrario. Pista: Usa un evento de javascript de los visto por ahora en el curso.

[ 
    { 
        hoteId: 1, 
        hotelName: "Hotel 1", 
        availableRooms: 25, 
        price: 10.20, 
    }, 
    { 
        hoteId: 2, 
        hotelName: "Hotel 2", 
        availableRooms: 8, 
        price: 4.25, 
    }, 
    { 
        hoteId: 3, 
        hotelName: "Hotel 3", 
        availableRooms: 15, 
        price: 14.30, 
    }, 
    { 
        hoteId: 4, 
        hotelName: "Hotel 4",
        availableRooms: 30, 
        price: 10, 
    }, 
    { 
        hoteId: 5, 
        hotelName: "Hotel 5",
        availableRooms: 10,
        price: 8.10, 
    }, 
]

<input type="text" id="textBox">
<input type="button" id="myButton" value="click me">