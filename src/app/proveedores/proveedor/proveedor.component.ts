import { Component, OnInit } from '@angular/core';



interface Empresa{
  nombre: string,
  productos: number,
  tipo: string
}

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  
  nuevoProveedor: Empresa = {
    nombre: 'coca-cola',
    productos: 0,
    tipo: '',
  }


  // agregar(evento: any): void{
  //   // no actualizar evento detener su proceso
  //   // evento.preventDefault()
  //   console.log('desde evento submit angular');
  // }
  
  agregar(): void{
    // no actualizar evento detener su proceso
    // evento.preventDefault()
    console.table(this.nuevoProveedor)
  }

  agregarInput(evento: any): void{
    // no actualizar evento detener su proceso
    // evento.preventDefault()
    console.log(evento);
    this.nuevoProveedor.nombre = evento.target.value;
    console.table(this.nuevoProveedor);
  }
}
