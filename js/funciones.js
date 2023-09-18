/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

// Ejercicio 1
const perimetroCirculo = (diametro) => {
    // formula perimetro circulo => pi*diametro
    let perimetro = diametro * Math.PI
    return perimetro
}
// Ejercicio 2 
const areaRectangulo = (base,altura) => {
// formula => base*altura
    let area = base * altura;
    return area;
}
// Ejercicio 3
const numeroAlCuadrado = (numero) => {
    let resultado = numero*numero
    return resultado
}
// Ejercicio 4
const convertirCelciusToF = (celcius) => {
// formula => (2 °C × 9/5) + 32
    let farenheit = (celcius*(9/5))+32
    return farenheit
}
// Ejercicio 5
const voltajeTotal = (resistencia,intensidadCorriente) => {
// formula => V = R*I
    let voltaje = resistencia*intensidadCorriente
    return voltaje
}
// Ejercicio 6
const volumenEsfera = (radio) => {
// formula = 4/3pi*r^3
    let volumen = (4/3)*Math.PI*(radio*radio*radio);
    return volumen
}