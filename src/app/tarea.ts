// export interface producto {   
//   id: number; 
//   codigoP : string;
//   nombreP  : string;
//   priceP: number,
//   cambioPrice:(valor:number) => void
// }

// // ALMACEN

// export default class Almacen{
//     constructor (
//       private codigoA : string,
//       private nombAlmacen : string,
//       private prodAlmacen   : producto[] 
//     ){}

//     //Funcion ingresar Prodructo
//     public ingresarProducto(P : producto){
//       this.prodAlmacen.push(P);
//     }
    
//     //Funcion mostrar Productos
//     public mostrarProducto(){
//       console.log("\nnombre Almacen:"+this.nombAlmacen+
//                     "\ncodigo del almacen: "+this.codigoA);
//       this.prodAlmacen.forEach(function(elemento) {
//         console.table(elemento);
//       })
//     }
  
//     public buscarProducto(codP : producto){
//       let buscarProducto = false;
//       let position = 1;
//       let indiceProducto = 0;
   
//       while(!buscarProducto && indiceProducto < this.prodAlmacen.length) {
//           if(this.prodAlmacen[indiceProducto] == codP) {
//               buscarProducto = true;
//               position = indiceProducto;
//           } else {
//               indiceProducto += 1;
//           }
//       }
//       return position;
//     }
//     public buscarP(producto:producto){  
//       let resultado = this.prodAlmacen.find((procd)=>procd == producto);
//       if(resultado == null){
//         return null;
//       }
//       console.log("busqueda Producto:-----------")
//       return resultado;
//       }

//       /* private quitarP(codP : producto){
//         let posicion = this.buscarP(codP);
    
//         this.prodAlmacen.splice(posicion,1);
//       } */
  
//     private quitarProducto(codP : producto){
//       let posicion = this.buscarProducto(codP);
  
//       this.prodAlmacen.splice(posicion,1);
//     }
  
//     public moverProducto(codP : producto, codA : Almacen){
//       let posicion = this.buscarProducto(codP);
//       if(posicion == -1){
//         console.log("Producto no habido en prodAlmacen");
//       }else{
//         codA.ingresarProducto(this.prodAlmacen[posicion])
//         this.quitarProducto(codP)
//         console.log("Accion Exitosa");
//       }
//     }
//   }
   
   
  
   
  