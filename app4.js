// El contador de visitas
// Un sitio web comienza con un contador de visitas en 100. En un 
// día recibe 25
// visitas adicionales, luego pierde 10 por un error de registro, 
// y finalmente se
// duplican las visitas. Representa esta situación y determina 
// cuál es el valor final del contador.
alert("contador de vistas");
//declaro las variables
let visitas, suma, resta, multiplicacion;
// asigno valor a vista
visitas=100;
// asigno valor a suma sumando vistas + 25
suma=visitas+25;
// asigno valor a resta restando suma-10
resta=suma-10;
//asigno valor a multiplicacion, multiplicando resta*2
multiplicacion=resta*2;
//muestro el resultado de cada una
alert(`las vistas sumaron: ${suma}
las vistas bajaron a: ${resta}
las vistas se multiplicaron ${multiplicacion}`);

