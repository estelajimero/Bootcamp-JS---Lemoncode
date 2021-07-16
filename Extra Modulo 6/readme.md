## Módulo 6 - Algoritmos - Ejercicios para Practicar
Antes de empezar con los ejercicios, una pequeña explicación. En el codigo de estos ejercicios encontrarás lo siguiente:

Crear un array vacío de longitud n:

    var myEmptyArray = new Array(3); // Array vacio de 3 posiciones. 
    console.log(myEmptyArray); // [empty × 3]

Rellenar todas las posiciones de un array con el mismo valor:

    var myArray = new Array(3); // Array vacio de 3 posiciones.
    myArray.fill("Hola");
    console.log(myArray); // ["Hola", "Hola", "Hola]

En una sola línea equivaldría a:

    var myArray = new Array(3).fill("Hola");
    console.log(myArray); // ["Hola","Hola","Hola"]