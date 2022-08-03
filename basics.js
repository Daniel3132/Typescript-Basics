"use strict";
let saludo = 'hola';
let numero;
let cualquier;
const PI = 3.24;
function saludar() {
    numero = 7;
    console.log(saludo);
    console.log(numero);
}
saludar();
let usuario1 = { nombreUsuario: "Juan", password: "1234", confirmPass: '1234' };
console.log(usuario1);
console.log(usuario1.nombreUsuario);
let avion = {
    abordarTransporte: function () {
        console.log("abordando");
    }
};
///////////////// generics //////////////
let arregloNumeros;
arregloNumeros = [1, 2, 3, 5];
console.log(arregloNumeros[0]);
/////// modulos ////////
