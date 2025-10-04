// El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y 
// su altura en metros.
// Quiere calcular tanto el área como el perímetro del terreno 
// para cercarlo y sembrar.
// Diseña un programa en el que él pueda obtener ambos valores.
alert(`calcule el area y el perimetro de su terreno solo con la base y la altura`);

let area, perimetro, altura, base;

altura=parseInt(prompt('ingrese la altura'));
base=parseInt(prompt('ingrese la base'));

area=altura*base;
perimetro= 2*(base+altura);

alert(`el area de su terreno es:  ${area}
    el perimetro de su terreno es:  ${perimetro}`);
