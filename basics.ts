let saludo = 'hola';
let numero: number;
let cualquier: any;
const PI = 3.24;
function saludar() {
    numero = 7;
    console.log(saludo)
    console.log(numero)
}
saludar()

////////// Clases /////////

/* class Persona{
    private nombre:string;

    constructor(nombre:string){
        this.nombre =nombre
    }

    getnombre():string{
        return this.nombre
    }

    static metodoStatico():number{
        return 15
    }
}
let persona1 = new Persona("Juan");
// console.log(persona1.nombre) can not access nombre bc is private
console.log(persona1.getnombre());
console.log(Persona.metodoStatico()) */

///////// interface //////////////////

interface Usuario {
    nombreUsuario: string;
    password: string;
    confirmPass?: string; //? to mark its optional
}

let usuario1: Usuario = { nombreUsuario: "Juan", password: "1234", confirmPass: '1234' }
console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar {
    abordarTransporte(): void;
}
let avion: Abordar = {
    abordarTransporte: function () {
        console.log("abordando")
    }
}

///////////////// generics //////////////

let arregloNumeros: Array<number>;

arregloNumeros = [1, 2, 3, 5];

console.log(arregloNumeros[0]);

/////// modulos ////////

import { Persona } from "./persona";
let persona1 = new Persona("Daniel");
console.log(persona1.nombre)

/*
npm i webpack webpack-cli webpack-dev-server
npm i typescript ts-loader
npm init -y
npm start
  */

/////// funciones flecha /////////////
let sumaFlecha =(a:number, b:number)=>{
    return a + b
}
console.log(sumaFlecha(3,2));
/////// decoradores /////////////
function Saludar(target:Function):void{
    target.prototype.saludos = function():void{
        console.log("hola desde decoradores")
    }
}
@Saludar
class Hola{
    constructor(){}
}
let hola1 = new Hola;
hola1.saludos()
