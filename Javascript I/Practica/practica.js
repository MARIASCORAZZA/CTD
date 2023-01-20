//INSTALO NODE JS
//console.log("prueba node js");

//INSTALO PROMPT
const prompt = require("prompt-sync")({ sigint: true });




//HAGO PRUEBA DE VARIABLES Y APLICO PROMPT
//let nombre = prompt("ingrese su nombre:     ");
//console.log("Hola, ${nombre} ");





//HAGO PRUEBA DE FUNCIONES CON OPERADORES ARITMETICOS
// function elDoble (numero){
//     return numero * 2;
// }
// console.log(elDoble(2));


//APLICO PROMPT Y CONDICIONALES
// let edad = prompt ("Ingresa tu edad");
// if (edad > 18) {
// console.log ("sos mayor");
// }
// else console.log("te falta sopa");


//HAGO UNA FUNCION DECLARADA Y LA MUESTRO POR CONSOLA
// function saludar (nombre) {
//     return "hola " + nombre;
// }
// console.log(saludar("sol"));



//UN EJEMPLO DE ARROW FUNCTION

// let saludar2 = (nombre2) => "Hola " + nombre2;
// console.log(saludar2 ("Marta") );

//UN EJEMPLO DE ARROW FUNCTION CON VARIAS SENTENCIAS
let esPar = numero => {
    if (numero % 2 === 0){
        return true;
    }
    else return false;
}

console.log(esPar(8));