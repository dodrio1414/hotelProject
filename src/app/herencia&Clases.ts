// //////---------------------------------------------------------------------------------------
// //                        CLASE PADRE
// //-----------------------------------------------------------------------------------
export class General {
    private _nombre: string;
     
    constructor(nuevoNombre: string){
        this._nombre = nuevoNombre;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
            this._nombre = value;
    }  
}


export class ProductoClass extends General{
    
    
    static idProducto: number = 0;
 

    constructor(nuevoNombre: string, private _price: number, private _codigo?: number){
        super(nuevoNombre)
        
        ProductoClass.idProducto +=1;
        this._codigo = ProductoClass.idProducto

    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) { 
            this._price = value;
    }

    public agregarCantidad(increase:number){
        this._price = this._price + increase;
      }
    public nuevoPrecio(newPrice:number){
        this._price =  newPrice;
      }

    //Funcion mostrar Productos
    /* public mostrarProducto(){
      console.log(
                    "\ncodigo del almacen: "+this._codigo);

                    
      this.prodAlmacen.forEach(function(elemento) {
        console.table(elemento);
      }) 
    }*/
    
}

//private _prodAlmacen: ProductoClass[]

export class AlmacenClass extends General{
    

    static idAlmacen:number = 0;
    

    constructor(nuevoNombre: string, private _codigoA?: number,private _prodAlmacen: ProductoClass[] = [] ){    
        super(nuevoNombre);
        AlmacenClass.idAlmacen +=1;
        this._codigoA=AlmacenClass.idAlmacen
    }

    public get prodAlmacen(): ProductoClass[] {
        return this._prodAlmacen;
    }
    public set prodAlmacen(value: ProductoClass[]) {
            this._prodAlmacen = value;
    }

    public ingresarProducto(P : ProductoClass){
        this.prodAlmacen.push(P);
      }
    
    public mostrarProducto(){
    console.log("-----------------------",this.nombre,"\n-----------------------codigo del almacen: "+this._codigoA);            
    this.prodAlmacen.forEach(function(elemento) {
        console.table(elemento);
        })
    }

    public buscarP(producto:ProductoClass){  
        let resultado = this.prodAlmacen.find((procd)=>procd == producto);
        if(resultado == null){
            
        return null;
        }
        console.log("busqueda Producto: ", this.nombre)
        return resultado;
    }


/*     public quitarProducto(producto:ProductoClass){  
        let resultado =  this.prodAlmacen.find((procd)=>procd == producto);
        let kik: any;
        if(resultado == null){
            
        return null;
        }
        console.log("busqueda eliminado: ", this.nombre)
        return delete producto;
    } */


}



