/*
tipo de datos de javascript
*/
//tipo de dato string
let nombre = "carlos"

console.log(nombre)

//tipo de dato numerico
let n1 = 1000 ;

console.log(n1) ;

//tipo objeto
var objeto = {
    nombre:"jose",
    edad: 25,
    localidad: "NL"

};
console.log(objeto)

//para saber que tipo de variable es usar el Typeof
console.log(typeof nombre)

//tipo de dato booleano (true,false)
var bandera = false;
var banderaverdadera = true;
console.log(typeof bandera);

//tipo de dato funcion
function mifuncion(){}
console.log(typeof mifuncion)

//variable constante
const fecha = 28
console.log(typeof fecha)

//tipo de variable de dato Symbol
//Se usa para crear un valor unico de una variable
var simbolo = Symbol("misimbolo")
console.log(simbolo)

//Tipo clase es una funcion
//this es para hacer referencia de atributos de nuestra clase
class persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona)
console.log(typeof persona)

//Tipo de undefined
//Se le puede asignar undefined pero tambien es un tipo de dato.
var x;
console.log(x)

x = undefined
console.log(x)

//Tipo de dato null/ null = ausencia de valor
var y = null;
console.log(y)
console.log(typeof y)

//Tipo de dato (arreglo)
let auto = ['bmw', 'volvo', 'vento'];
console.log(auto)
console.log(typeof auto)

//asignar cadenas vacias a variables
let z = '';
console.log(z)
console.log(typeof z)

//Variables buenas: let nombreCompletoFecha
//console.log( z )

let A, b;
A = 20, b = 15;
let C = A + b;
console.log( C )

let nombreCompleto = "juan perez";
let nombrecompleto = "carlos perez";
console.log( nombreCompleto )
console.log( nombrecompleto )

let break1 = 10;