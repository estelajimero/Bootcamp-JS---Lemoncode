Calculadora Secuencial

Repite el ejercicio de la calculadora pero esta vez hagamos una calculadora secuencial. Esto es:
- Solo es necesario un único campo numérico.
- Mantén los 4 botones de las 4 operaciones.
- Añade un botón de igual o resultado ( "=" ).

Una calculadora secuencial funciona del siguiente modo:
* El usuario introduce un primer número.
* Clicka una operación.
* A continuación introduce un segundo número.
* Clicka de nuevo otra operación.
* Y así sucesivamente... hasta que pulsa el botón de resultado.

Si te fijas, la clave de este algoritmo es ir acumulando el resultado parcial. Para ello, con cada click que el usuario hace en una
operación, deberás:
- Extraer el operando que hay en el input.
- Actualizar el resultado parcial, que será aplicar la operación anterior guardada, usando como operandos el resultado
  parcial y el nuevo operando.
- Almacenar la operación actual para la siguiente vez.