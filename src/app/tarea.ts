// ALMACEN

export default class Almacen{
    constructor (
      private codigoA : string,
      private nombAlmacen : string,
      private prodAlmacen   : producto[]
    ){}

    //Funcion ingresar Prodructo
    public ingresarProducto(P : producto){
      this.prodAlmacen.push(P);
    }
    
    //Funcion Busacar
    public mostrarProducto(){
      console.log("\nnombre Almacen:"+this.nombAlmacen+
                    "\ncodigo del almacen: "+this.codigoA);
      this.prodAlmacen.forEach(function(elemento) {
        console.table(elemento);
      })
    }
  
    public buscarProducto(codP : producto){
      let buscarProducto = false;
      let position = 0;
      let indiceProducto = 0;
   
      while(!buscarProducto && indiceProducto < this.prodAlmacen.length) {
          if(this.prodAlmacen[indiceProducto] == codP) {
              buscarProducto = true;
              position = indiceProducto-1;
          } else {
              indiceProducto += 1;
          }
      }
      return position;
    }

    
  
    private quitarProducto(codP : producto){
      let posicion = this.buscarProducto(codP);
  
      this.prodAlmacen.splice(posicion,1);
    }
  
    public moverProducto(codP : producto, codA : Almacen){
      let posicion = this.buscarProducto(codP);
      if(posicion == -1){
        console.log("Producto no habido en prodAlmacen");
      }else{
        codA.ingresarProducto(this.prodAlmacen[posicion])
        this.quitarProducto(codP)
        console.log("Accion Exitosa");
      }
    }
  }
   
   
  // PRODUCTOS
   
  export interface producto {    
    codigoP : string;
    nombreP  : string;
    priceP: number,
    cambioPrice:(valor:number) => void
  }