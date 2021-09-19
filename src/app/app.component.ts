import { Component } from '@angular/core';

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

