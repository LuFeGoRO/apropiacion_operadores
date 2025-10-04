// El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y 
// su altura en metros.
// Quiere calcular tanto el área como el perímetro del terreno 
// para cercarlo y sembrar.
// Diseña un programa en el que él pueda obtener ambos valores.
alert(`calcule el area y el perimetro de su terreno solo con la base y la altura`);
//declaro las variables
let area, perimetro, altura, base;
//asigno valores por medio de entradas
altura=parseInt(prompt('ingrese la altura'));
base=parseInt(prompt('ingrese la base'));
//calculo el area y el perimetro
area=altura*base;
perimetro= 2*(base+altura);
//muestro el resultado 
alert(`el area de su terreno es:  ${area}
    el perimetro de su terreno es:  ${perimetro}`);
