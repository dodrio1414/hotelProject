export class Orden{

    static idOrden: number = 0;


    constructor(private _contadorProductosAgregados: number, private _id?: number, private _productos: Producto[]=[]){

            this._id = ++Orden.idOrden;
    } 

    //metodo static 
    static get MAX_PRODUCTOS(){
        return 3;
    }
    //metodo SET & GET 
    public get productos(): Producto[] {
        return this._productos;
    }
    public set productos(value: Producto[]) {
        this._productos = value;
    }

    public get contadorProductosAgregados(): number {
        return this._contadorProductosAgregados;
    }
    public set contadorProductosAgregados(value: number) {
        this._contadorProductosAgregados = value;
    }
    

    public get id(): number {
        return this._id =  ++Orden.idOrden;
    }
    public set id(value: number) {
        this._id = value;
    }

    //metodos
    public agregarProductos(productoAgregar: Producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS ){
            this._productos.push(productoAgregar)
            //this._productos[this.id++] = productoAgregar
        }else{
            console.log("\n---------------------NO SE PUEDEN AGREGAR MAS PRODUCTOS\n----------------------")
        }
    }
}

export class Producto{

     
    static idProducto: number = 0;
    constructor(
        private _nombre: string,
        private _precio: number,
        private _contadorProdcutos: number,
        private _id?: number,
    ){
        this._id = ++Producto.idProducto;
    }

    //Metodos Get & Set
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }

    public get contadorProdcutos(): number {
        return this._contadorProdcutos;
    }
    public set contadorProdcutos(value: number) {
        this._contadorProdcutos = value;
    }

    public get id(): number {
        return this._id = ++Producto.idProducto;
    }
    public set id(value: number) {
        this._id = value;
    }

    
    
}
