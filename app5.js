// 5. La operación misteriosa
// Se tiene la expresión matemática siguiente:
// (20+10)/5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20+10)/5+3∗2−4
// Tu reto es implementarla en JavaScript y analizar paso a paso 
// en qué orden se
// ejecutan las operaciones hasta llegar al resultado final.

alert("calcule la operacion misteriosa");
//declaro las variables
let operacion;
//asigno valor a operacion con la siguiente 
operacion= (20 + 10 ) / 5 + 3 * 2 - 4 * ( 20 + 10) / 5 + 3 * 2 -4 * ( 20 + 10 ) / 5 + 3 * 2 -4;
alert(`el resultado es: ${operacion}`);
// (20+10)/5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20+10)/5+3∗2−4
// se optiene reultado por medio de la gerarquia de operaciones
// primero se hacen los parentesis, diviciones y multiplicaciones
// (30)/5+6-4(30)/5+6-4(30)/5+6-4
//     6 +6  -24   +6   -24  +6-4
//  luego se suma positivos y negativos:
//          24-52
// se resuelve la diferencia
//           -28


