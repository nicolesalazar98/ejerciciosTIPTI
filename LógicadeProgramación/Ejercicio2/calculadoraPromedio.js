let nombre=prompt("Ingrese su nombre completo");
let c1, c2, c3;
// do {
//     c1=parseInt (prompt("Ingrese la primera calificación"));
//     c2=parseInt (prompt("Ingrese la segunda calificación"));
//     c3=parseInt (prompt("Ingrese la tercera calificación"));

// } while (!(c1>=0 && c2>=0 && c3>=0 && c1<=10 && c2<=10 && c3<=10));


let notas=true;
while(notas) {
    c1=parseInt (prompt("Ingrese la primera calificación"));
    c2=parseInt (prompt("Ingrese la segunda calificación"));
    c3=parseInt (prompt("Ingrese la tercera calificación"));
    if ((c1>=0 && c2>=0 && c3>=0 && c1<=10 && c2<=10 && c3<=10)) {
        notas=false;
    }
}

// while(true) {
//     c1=parseInt (prompt("Ingrese la primera calificación"));
//     c2=parseInt (prompt("Ingrese la segunda calificación"));
//     c3=parseInt (prompt("Ingrese la tercera calificación"));
//     if ((c1>=0 && c2>=0 && c3>=0 && c1<=10 && c2<=10 && c3<=10)) {
//         break;
//     }
// }


let promedio=(c1+c2+c3)/3;

if (promedio>=7) {
    console.log (nombre + ", ¡felicidades! Has aprobado con un promedio de " + promedio);
} else {
    console.log (nombre + ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + promedio);
}

console.log(promedio);


console.log(nombre);
 
 
//  let numero = parseInt(prompt("Deme un numero entero"));
//  if(!isNaN(numero)){  
//     console.log("modulo "+numero % 1) ;
//     if (numero % 1 === 0) {
//             //Es un numero entero
//             for(let i=0;i<=numero;i++){
//                 console.log(i+",");
//             }
//     } else {
//             alert ("Es un numero decimal");
//     }     
//  }else{
//  alert ("No es un numero");}