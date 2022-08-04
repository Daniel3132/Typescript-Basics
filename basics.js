"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const persona_1 = require("./persona");
let persona1 = new persona_1.Persona("Daniel");
console.log(persona1.nombre);
/*
npm i webpack webpack-cli webpack-dev-server
npm i typescript ts-loader
npm init -y
npm start
  */
/////// funciones flecha /////////////
let sumaFlecha = (a, b) => {
    return a + b;
};
console.log(sumaFlecha(3, 2));
/////// decoradores /////////////
function Saludar(target) {
    target.prototype.saludos = function () {
        console.log("hola desde decoradores");
    };
}
let Hola = class Hola {
    constructor() { }
};
Hola = __decorate([
    Saludar
], Hola);
let hola1 = new Hola;
hola1.saludos();
