// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
const edadParaVotar = (edad) => {
    if(edad>=18){
        console.log("Eres apto para votar");
    }else{
        console.log("No eres apto para votar");
    }
}
/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */
const promedioAprobatorio = (c1,c2,c3,c4) => {
    promedio = (c1+c2+c3+c4)/4
    if(promedio>=7){
        console.log("Aprobaste con un promedio de: "+String(promedio));
    }
    else{
        console.log("No aprobaste, tu promedio es: "+String(promedio));
    }
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */

const esPrimo = (numero) => {
    if(numero==2||numero==3){
        return true;
    }
    if(numero<=1||numero%2==0||numero%3==0){
        return false;
    }
    // en teoria se debe iterar sobre las demas combinaciones 
    // pero aun no vemos el for asi que lo deje asi por el momento
    else return true;
}

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
const divisible7u8 = (numero) => {
    if(numero%7==0||numero%8==0){
        return true;
    }
    else return false;
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

const divisible4o9 = (numero) => {
    if(numero%4==0||numero%9==0){
        return true;
    }
    else return false;
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */
const calculadoraSimple = (modo,a,b) => {
    switch(modo){
        case "suma" :
            let suma = a + b;
            console.log(suma);
            break;
        case "resta" :
            let resta = a - b;
            console.log(resta);
            break;
        case "multiplicacion" :
            let mul = a * b;
            console.log(mul);
            break;
        case "division" :
            let div = a / b;
            console.log(div);
            break;
    }
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
const recomiendaPeli = (genero) => {
    switch(genero){
        case "accion" :
            console.log("Jhon Wick");
            break;
        case "drama" : 
            console.log("Drive my car");
            break;
        case "comedia" : 
            console.log("Annie Hall");
            break;
        case "romance" :
            console.log("La La Land");
            break;
        case "suspenso" :
            console.log("Pi");
            break;
        case "terror" :
            console.log("El exorcista");
            break;
    }
}


/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */

const cajeroATM = (opcion) => {
    switch(opcion){
        case 1 :
            console.log("Retirar dinero");
            break;
        case 2 :
            console.log("Transferencia");
            break;
        case 3 :
            console.log("Deposito");
            break;
        case 4 :
            console.log("Pago de servicios");
            break;
    }
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */
const conversorDivisas = (moneda,cantidad) => {
    switch(moneda){
        case "dolares" :
            // 1 peso mxn = 0.059 dolares
            let dolares = 0.059*cantidad;
            console.log("Esto es en dolares americanos"+String(dolares));
            break;
        case "euros" :
            // 1 peso mxn = 0.055 euros
            let euros = 0.055*cantidad;
            console.log("Ësto es en euros: "+String(euros));
            break;
        case "yenes" :
            // 1 peso mxn = 8.66 yenes
            let yenes = 8.66*cantidad;
            console.log("Esto es en yenes japoneses: "+String(yenes));
            break;
        case "libra" :
            // 1 peso mxn = 0.047 libras
            let libras = 0.047*cantidad;
            console.log("Esto es en libras esterlinas: "+String(libras));
            break;
        case "franco" :
            // 1 peso mxn = 0.053 francos
            let francos = 0.053*cantidad;
            console.log("Esto es en francos suizos: "+String(francos));
            break;
    }
}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

const descuentoValidar = (codigo,precio) =>{
    if (codigo=="DESCUENTO10"){
        let nuevoPrecio = precio*.9
        console.log("Descuento aceptado (10%) \nEl nuevo precio es: "+String(nuevoPrecio));
    }
    else{
        console.log("Lo siento ese codigo no es valido, tu precio se mantiene en: "+String(precio));
    }
}