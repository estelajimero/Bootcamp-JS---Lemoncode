## Calculadora de sueldo neto

Vamos a implementar una calculadora de sueldo neto.

## Interfaz

Para ello, debemos permitir que el usuario introduzca el sueldo bruto anual. Por tanto, nuestra interfaz gráfica puede ser tansencilla como: 
- Input numérico para el sueldo bruto.
- Botón de calcular.
- Al presionar calcular, un algoritmo debe procesar el sueldo bruto introducido y devolver un informe de sueldo neto.

## Algoritmo

Para calcular el salario neto a partir de una cantidad bruta anual, ten en cuenta las siguientes premisas:

Al sueldo bruto hay que restarle los 2 impuestos principales por los que se ve gravado en nuestro pais: Seguridad Social
e IRPF.

Seguridad Social. Simplificando, diremos que todo trabajador debe abonar el 6,35% de sus ingresos brutos en concepto
de seguridad social, con una base máxima anual de cotización de 45014.4€.

Esto significa, que si el salario bruto sobrepasa dicha base máxima de cotización, solo se tiene en cuenta dicha base
máxima para el cálculo del impuesto.

Ejemplo: un salario de 60.000€ o de 100.000€ pagarán la misma cantidad de Seguridad Social, correspondiente al
6.35% de la base máxima (45014,4€).

IRPF. Aunque este impuesto depende de multitud de factores, situaciones familiares, minusvalias, ascendiente y
descendientes, etc., vamos a simplificar su cálculo del siguiente modo:

La base imponible sobre la que se calcula el impuesto consiste en restar a los ingresos brutos:
Seguridad Social.
2.000€ en concepto de gastos generales deducibles.

Una vez obtenida la base, el impuesto se calcula en tramos:
- Tramo 0: Los primeros 5.550€ no tributan (0%). Se considera el mínimo personal y familiar.
- Tramo 1: Desde esos 5.550€ del tramo anterior hasta los 12.450€ se aplica un gravamen del 19%.
- Tramo 2: Desde 12.450€ hasta 20.200€ el porcentaje asciende al 24%.
- Tramo 3: Desde 20.200€ hasta 35.200€ se cotiza al 30%.
- Tramo 4: Desde 35.200€ hasta 60.000€ abonamos el 37%.
- Tramo 5: Finalmente, toda cantidad restante que supere los 60.000€ esta gravada al 45%.

Una vez calculado los 2 impuestos, muestra un escueto informe al usuario que presente:

Salario bruto anual.
- Cantidad destinada a Seguridad Social.
- Cantidad destinada a IRPF.
- Salario neto anual.
- Salario neto mensual (en 12 o 14 pagas).

(*) Los datos para el cálculo de Seguridad Social e IRPF aqui presentados están extraidos para la campaña de 2018. Se
podrían revisar y actualizar para futuras campañas.