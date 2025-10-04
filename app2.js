// 2. Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita 
// calcular el promedio
// para saber cómo le fue en la asignatura. Crea un programa que, 
// a partir de tres
// valores numéricos, muestre el promedio en pantalla.
alert(`calcule el promedio de sus notas:`);

let primer_nota, segunda_nota, tercera_nota, promedio;

primer_nota=parseInt(prompt("ingrese primera nota"));
segunda_nota=parseInt(prompt("ingrese segunda nota"));
tercera_nota=parseInt(prompt("ingrese tercera nota"));

promedio= (primer_nota+segunda_nota+tercera_nota)/3;

alert(`el promedio de sus notas es: ${promedio}`);
