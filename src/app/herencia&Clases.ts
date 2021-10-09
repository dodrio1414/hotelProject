// // //////---------------------------------------------------------------------------------------
// // //                        CLASE PADRE
// // //-----------------------------------------------------------------------------------
// export class General {
//     private _nombre: string;
     
//     constructor(nuevoNombre: string){
//         this._nombre = nuevoNombre;
//     }

//     public get nombre(): string {
//         return this._nombre;
//     }
//     public set nombre(value: string) {
//             this._nombre = value;
//     }  
// }


// export class ProductoClass extends General{
    
    
//     static idProducto: number = 0;
 

//     constructor(nuevoNombre: string, private _price: number, private _codigo?: number){
//         super(nuevoNombre)
        
//         ProductoClass.idProducto +=1;
//         this._codigo = ProductoClass.idProducto

//     }

//     public get price(): number {
//         return this._price;
//     }
//     public set price(value: number) { 
//             this._price = value;
//     }

//     public agregarCantidad(increase:number){
//         this._price = this._price + increase;
//       }
//     public nuevoPrecio(newPrice:number){
//         this._price =  newPrice;
//       }

    
// }

// //private _prodAlmacen: ProductoClass[]

// export class AlmacenClass extends General{
    

//     static idAlmacen:number = 0;
    

//     constructor(nuevoNombre: string, private _codigoA?: number,private _prodAlmacen: ProductoClass[] = [] ){    
//         super(nuevoNombre);
//         AlmacenClass.idAlmacen +=1;
//         this._codigoA=AlmacenClass.idAlmacen
//     }

//     public get prodAlmacen(): ProductoClass[] {
//         return this._prodAlmacen;
//     }
//     public set prodAlmacen(value: ProductoClass[]) {
//             this._prodAlmacen = value;
//     }

//     public ingresarProducto(P : ProductoClass){
//         this.prodAlmacen.push(P);
//       }
    
//     public mostrarProducto(){
//     console.log("-----------------------",this.nombre,"\n-----------------------codigo del almacen: "+this._codigoA);            
//     this.prodAlmacen.forEach(function(elemento) {
//         console.table(elemento);
//         })
//     }

//     public buscarP(producto:ProductoClass){  
//         let resultado = this.prodAlmacen.find((procd)=>procd == producto);
//         if(resultado == null){
            
//         return null;
//         }
//         console.log("busqueda Producto: ", this.nombre)
//         return resultado;
//     }

//     private buscarPro(codP : ProductoClass){
//         let buscarPro = false;
//         let position = 1;
//         let indicePro = 0;
     
//         while(!buscarPro && indicePro< this.prodAlmacen.length) { //busca productos dentro de un array 
//             if(this.prodAlmacen[indicePro] == codP) { // convalida q el producto q se busca sea igual al producto que esta en el array 
//                 buscarPro = true;
//                 position = indicePro;
//             } else {
//                 indicePro += 1;
//             }
//         }
//         return position;
//       }

//     public quitarProducto(codP : ProductoClass){
//             let posicion = this.buscarPro(codP);
//             this.prodAlmacen.splice(posicion,1);
//         }
// }



