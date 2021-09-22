import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { Curso, DetalleMatricula} from './interfacesPractica';
//tarea con objeto y clases
//import Almacen, { producto } from './tarea';
//import { Interface } from 'readline';
import { General, AlmacenClass, ProductoClass } from './herencia&Clases';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelProject';
}

console.log("bienvenidos a TS");

//#region variables
// let nombre:string = 'Rodrigo'
// //en TS tenemos q etipar fuertemente a las variables o podemos darle un "any"
// //Conectores en TS : or "|" and "&"
// let password:String | Number = 500;
// password="Fer"
// let bandera:Boolean = true;
// console.log("nombre: "+nombre,"password: "+password,"/"+ typeof bandera)
//#endregion


//#region array
// let pasatiempo:(String | Number)[] = ["rodrigo","aguirre",2021]
// pasatiempo.push("push","borrar")
// //borrar el ultimo dato
// pasatiempo.pop()
// console.log(pasatiempo)
//#endregion

//tuples


//#region Objetos
//al crear un objeto la variable hace referencia a un espacio de memoria hexadecimal
//para guardar las propiedades del objeto
//this.nombre -> apuntador al objeto y a una de sus propiedades
//FORMA 01
// let alumno = {
//   nombre: "Rodrigo",
//   apellido: "Aguirre",
//   pension: 850,
//   estaMatriculado: true,
//   pasatiempo: ["videojuegos","futboll"],
//   //funcion dentro de un objeto
//   nombreCompleto: function(){
//     return this.nombre + " " + this.apellido
//   }
// }
// console.log(alumno.pasatiempo)

// //para leer la funcion simpre ()
// console.log(alumno.nombreCompleto())
// console.log(alumno)

// //acceder como un array
// console.log(alumno["nombre"])

// //agregar elemento a objeto
// alumno.telefono = "959307583"

// //recorrrer propiedades del objeto
// for(let i in alumno){
//   //acceder a las propiedades del objeto
//   console.log(i);
//   //acceder a los atributos de la prpiedad del objeto
//   console.log(alumno[i])
// }

//#endregion


//#region  Objetos con get, set y constructor 
//Constructor nos ayuda a reutilizar las propiedades de un objeto "Funcion especial"

//constructor de objetos de tipo alumno
 

//  let alumno = {
//   nombre: "Rodrigo",
//   apellido: "Aguirre",
//   pension: 850,
//   estaMatriculado: true,
//   pasatiempo: ["videojuegos","futboll"],
//   //funcion dentro de un objeto con get para obtener valores
//   get nombreCompleto(){
//     return this.nombre + " " + this.apellido;
//   },

//   //funcion para Modificar los atributos de preferencia usar una referencia con get
//   set nombreCompleto(nomb){
//     this.nombre = nomb.toUpperCase()
//   },

//   get nombreUpper(){
//     return this.nombre.toUpperCase()
//   }
  
// }
// //leer solo la funcion del objeto
// console.log(alumno.nombreCompleto)
// console.log(alumno.nombreUpper)

// //nombreCompleto -> accede a la propiedad / "Diego" -> accede al atributo de la propiedad
// alumno.nombreCompleto = "Diego"
// console.log(alumno.nombre)
//#endregion


//#region objeto sin interfaz
//objeto con 
// let alumno: {
//   nombre: String,
//   apellido: String,
//   pension: Number,
//   estaMatriculado: Boolean,
//   pasatiempo: String[]

// } = {
//   nombre: "Rodrigo",
//   apellido: "Aguirre",
//   pension: 850,
//   estaMatriculado: true,
//   pasatiempo: ["videojuegos","futboll"]
// }

// console.log(alumno)

// for(let i in alumno){
//   console.log(i)
//   console.log(alumno[i])
// }
//#endregion


//#region Objeto con interfaz
//interfaces ayudan a fijar los atributos de las propiedades del objeto
// interface Estudiante{
//   nombre: String,
//   apellido: String,
//   pension: Number,
//   estaMatriculado: Boolean,
//   pasatiempo: String[],
//   //propiedad tipo null
//   esculea?: String
// }

// let alumno: Estudiante = {
//   nombre: "Rodrigo",
//   apellido: "Aguirre",
//   pension: 850,
//   estaMatriculado: true,
//   pasatiempo: ["videojuegos","futboll"]
// }

// alumno.esculea = "Ing. Sistemas"

// console.log(alumno)
// console.table(alumno)

//#endregion


//#region Funciones
// function sumar(a:number,b:number): number{
//   return a + b;
// }

// console.log(sumar(2,3))

// let funcionflecha = (a:string,b:string):string => a +" "+b
// console.log(funcionflecha("hola","como estas"))

// let funcionVoid = (a:any): void => console.log(a)
// funcionVoid(sumar(10,5))
// //funcion atributos NULL/asigando
// let restar = (a:number,b:number = 2,c?:number) => a+b;
// console.log(restar(3))

// /* let argumentosSuma = sumatoria(5,4,13,10,9,9);
// function sumatoria(): number{
//   let suma: number = 0;
//   for(let i:number=0,i<arguments.length,i++){
//     suma+=arguments[i]
//   }
//   return suma;
// } */

//#endregion


//#region Objetos & Funciones

// /* interface Cliente{
//   nombre: string,
//   apellido: string,
//   cuenta: Cuenta,
// }

// interface Cuenta{
//   agencia: string,
//   saldo: number
// }

// let ag01cl01 = {
//   nombre: "Rodrigo",
//   apellido: "Yturriaga",
//   cuenta: {
//     agencia: "01",
//     saldo: 1000
//   }
// }
// console.log(JSON.stringify(ag01cl01))
//  */

// interface Cuenta{
//   agencia: string,
//   saldo: number
// }

// let ag01cl01: {
//   nombre: string,
//   apellido: string,
//   cuenta: Cuenta,
//   movimiento:(valor:number) => void
// } = {
//   nombre: "Rodrigo",
//   apellido: "Yturriaga",
//   cuenta:{
//     agencia: "01",
//     saldo: 1000
//   },
  
//   movimiento(valor:number) {
//     //this hace referencia a la instancia en este caso el objeto
//     this.cuenta.saldo += valor;
//   }
// } 

// //Agregar deposito a la cuenta
// //let deposito = (cantidad:number,cuenta:Cuenta): number => cuenta.saldo+=cantidad

// function deposito(cantidad:number,cuenta:Cuenta): void {
//   cuenta.saldo+=cantidad
// } 

// deposito(300,ag01cl01.cuenta)

// //Moviemiento
// ag01cl01.movimiento(500)

// /* for (let i in ag01cl01){
//   console.log(ag01cl01[i])
// }  */

// console.log(JSON.stringify(ag01cl01))
// console.table(ag01cl01)
//#endregion


//#region  Lectura de un Objeto

// let cuenta:{
//   cliente: string,
//   saldo: number,
//   movimineto:{
//     saldoAnterior: number,
//     valorMovimiento: number
//   }
// } = {
//   cliente: "Rodrigo Aguirre",
//   saldo: 500,
//   movimineto: {
//     saldoAnterior: 0,
//     valorMovimiento: 500
//   }
// }

// const{cliente, saldo} = cuenta;
// console.log(cliente);
// console.log(saldo);
//#endregion


//#region Desestructuracion de parametros

// const mat_mate: DetalleMatricula = {
//   nombreCurso : "Matematica",
//   matriculado: "Y",
//   creditos: 3 
// }

// const mat_ads: DetalleMatricula = {
//   nombreCurso: "ADS I",
//   matriculado: "Y",
//   creditos: 4
// }

// function totalCreditos(a:DetalleMatricula[]):number[] {
//   let totalCreditos = 0;
//   let totalCursos = 0;
//   // a.forEach((detalleMatricula) => {
//   //   totalCreditos += detalleMatricula.creditos
//   // });

//   a.forEach(({creditos}) => {
//     totalCreditos += creditos
//   });

//   a.forEach(({matriculado}) => {
//     totalCursos += matriculado.length
//   });
//   return [totalCreditos, totalCursos];
// }
// //Forma 1 destructurando Objeto
// //ingresamos los objetos que queremos
// const detMat: DetalleMatricula[] = [mat_mate, mat_ads]
// //asginamos a una palabra el tipo de funcion segun su return
// const [creditosMatricula,cursosMatriculados] = totalCreditos(detMat);

// console.log(creditosMatricula)

// console.log(cursosMatriculados)
// //Froma 2
// let asd = totalCreditos([mat_mate, mat_ads])
// console.log(asd)

//#endregion


//#region Export de otro archivo
// let curso: Curso = {
//   docente: "Juan Perez",
//   nombre: "DSII",
//   creditos: 3
// }

// console.table(curso)
//#endregion


/* Preparar un programa que permita crear productos, agregarlos a un almacen, 
modificar la cantidad de productos en el almacen (saldo), tener cuidado con los saldos negativos, 
trabajar con más de un almacen y mover productos entre almacenes.
Todo es en consola, la aplicación deberá mostrar los mensajes correspondientes a las acciones de muestra, es decir, 
si creo un producto y lo agrego al almacen 01, mostrar los productos con sus saldos en el almacen 01.

No es necesario interacción con la aplicación. Presentación individual. 
Subir el proyecto a github y presentar la url de github para la revisión del código fuente.
 */


//////---------------------------------------------------------------------------------------
//                        Objetos
//-------------------------------------------------------------------------------------

/* //Define an interface to standardize and reuse your object
interface Product {
  nameP: string;
  priceP: number;
  descriptionP: string;
  cambioPrice:(valor:number) => void
}

let cebolla: Product = {
nameP: "cebolla",
priceP: 1.43,
descriptionP: "Estudia sonso",
cambioPrice(valor:number) {
  //this hace referencia a la instancia en este caso el objeto
  this.priceP = valor;
}
}

let papa: Product = {
  nameP: "maiz",
  priceP: 2.10,
  descriptionP: "Estudia sonso x2",
  cambioPrice(valor:number) {
    //this hace referencia a la instancia en este caso el objeto
    this.priceP = valor;
  }
  }
let maiz: Product = {
  nameP: "papa",
  priceP: 2.10,
  descriptionP: "Estudia sonso x3",
  cambioPrice(valor:number) {
    //this hace referencia a la instancia en este caso el objeto
    this.priceP = valor;
  }
}



let productsA1: Product[] = [];
productsA1.push(cebolla,papa,maiz);
//...do other products.push(_) to add more objects...
console.table(productsA1);
//////---------------------------------------------------------------------------------------
//ALMACEN 1
//-------------------------------------------------------------------------------------

interface Almacen {
  name: string;
  numA: number;
  description: string;
  productos: Product[],
  
}

let almacen1: Almacen = {
  name: "almacen1",
  numA: 1,
  description: "almacen 1 p sonso",
  productos: productsA1,
  
}

maiz.cambioPrice(100)
console.table(almacen1.productos)
//////---------------------------------------------------------------------------------------
//ALMACEN 2
//-------------------------------------------------------------------------------------

let camote: Product = {
  nameP: "camote",
  priceP: 1.12,
  descriptionP: "Estudia sonso",
  cambioPrice(valor:number) {
    //this hace referencia a la instancia en este caso el objeto
    this.priceP = valor;
  }
  }
  
  let trigo: Product = {
    nameP: "trigo",
    priceP: 5.10,
    descriptionP: "Estudia sonso x2",
    cambioPrice(valor:number) {
      //this hace referencia a la instancia en este caso el objeto
      this.priceP = valor;
    }
  }

let productsA2: Product[] = [];
productsA2.push(camote,trigo);
//...do other products.push(_) to add more objects...
console.table(productsA2);

let almacen2: Almacen = {
  name: "almacen1",
  numA: 1,
  description: "almacen 1 p sonso",
  productos: productsA2,
  
}
 */
//////---------------------------------------------------------------------------------------
//                        clases & objetos
//-------------------------------------------------------------------------------------

//////---------------------------------------------------------------------------------------
//                        ALMACENES
//-----------------------------------------------------------------------------------


//  const almacen01 : Almacen = new Almacen("almacen01","Almacen --------------- 1 ------------------",[]);
//  const almacen02 : Almacen = new Almacen("almacen02","Almacen --------------- 2 ------------------",[]);
//  const almacen03 : Almacen = new Almacen("almacen03","Almacen --------------- 3 ------------------",[]);

// //////---------------------------------------------------------------------------------------
// //                        PRODUCTOS
// //-----------------------------------------------------------------------------------


// const producto01 :  producto = {
//   id: 1, 
//   codigoP : "P1",
//   nombreP : "Cebolla",
//   priceP: 1.1,
//   cambioPrice(valor:number) {
//     //this hace referencia a la instancia en este caso el objeto
//     this.priceP = valor;
//   }
// }

// const producto02 : producto = {
//   id: 2, 
//   codigoP : "P2",
//   nombreP : "papa",
//   priceP: 1.2,
//   cambioPrice(valor:number) {
//     //this hace referencia a la instancia en este caso el objeto
//     this.priceP = valor;
//   }
// }

// const producto03 : producto = {
//   id: 3, 
//   codigoP : "P3",
//   nombreP : "camote",
//   priceP: 1.3,
//   cambioPrice(valor:number) {
//     //this hace referencia a la instancia en este caso el objeto
//     this.priceP = valor;
//   }
// }

// const producto04 : producto = {
//   id: 4, 
//   codigoP : "P4",
//   nombreP : "maiz",
//   priceP: 1.4,
//   cambioPrice(valor:number) {
//     //this hace referencia a la instancia en este caso el objeto
//     this.priceP = valor;
//   }
// }


// //////---------------------------------------------------------------------------------------
// //                        CONSULTAS
// //-----------------------------------------------------------------------------------


// //ingresar productos en un almacen
// //cambio de precio
// producto01.cambioPrice(100)
// producto02.cambioPrice(20)

// // ALMACEN 1
// almacen01.ingresarProducto(producto01);
// almacen01.ingresarProducto(producto02);
// almacen02.ingresarProducto(producto03);
// almacen03.ingresarProducto(producto04);


// //lectura almacen 1
// almacen01.mostrarProducto();


// // ALMACEN 2

// //lectura almacen 2
// almacen02.mostrarProducto();

// // ALMACEN 3

// //lectura almacen 3
// almacen03.mostrarProducto();

// // movimiento entre almacenes
// almacen01.moverProducto(producto02,almacen02);
// almacen01.moverProducto(producto02,almacen02);

// almacen02.mostrarProducto();

// //buscar un producto en el almacen
// console.table(almacen01.buscarP(producto01))



// //////---------------------------------------------------------------------------------------
// //                        HERENCIA & CLASES
// //-----------------------------------------------------------------------------------

// //////---------------------------------------------------------------------------------------
// //                        PRODUCTOS
// //-----------------------------------------------------------------------------------
const cebolla: ProductoClass = new ProductoClass("Cebolla",1.5)


const papa: ProductoClass = new ProductoClass("papa",2.1)


const camote: ProductoClass = new ProductoClass("Camote",1.2)


// //////---------------------------------------------------------------------------------------
// //                        SHOW PRODUCTS
// //-----------------------------------------------------------------------------------
console.table(cebolla)
console.table(papa)
console.table(camote)

// //////---------------------------------------------------------------------------------------
// //                        warehouse
// //-----------------------------------------------------------------------------------

const almacen1: AlmacenClass = new AlmacenClass("Alamcen Rodrigo")
const almacen2: AlmacenClass = new AlmacenClass("Alamcen Diego")

// //////---------------------------------------------------------------------------------------
// //                       PRODUCTS -> WAREHOUSE
// //-----------------------------------------------------------------------------------
almacen1.ingresarProducto(cebolla);
almacen1.ingresarProducto(papa);
almacen2.ingresarProducto(camote)

// //////---------------------------------------------------------------------------------------
// //                       PRICE -> PRICE + NEW PRICE | PRICE -> NEW PRICE
// //-----------------------------------------------------------------------------------
cebolla.agregarCantidad(20)
camote.nuevoPrecio(2000)


console.table(almacen1)
console.table(almacen2)

almacen1.mostrarProducto()
almacen2.mostrarProducto()

// //////---------------------------------------------------------------------------------------
// //                       SEARCH A PRODUCT
// //-----------------------------------------------------------------------------------

//buscar un producto en el almacen
console.table(almacen1.buscarP(cebolla))
