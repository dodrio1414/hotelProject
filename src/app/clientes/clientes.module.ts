import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { clienteComponent } from './cliente/cliente.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ProveedoresModule } from '../proveedores/proveedores.module';

//decorador para modificar o agregar caracteristicas a la clase "ClientesModule"
@NgModule({
    //las declaraciones son un arreglo 
    //declaramos los modulos para esta clase ""ClientesModule
    declarations: [
        clienteComponent,
        ListaClientesComponent
    ],

    exports: [
        //agregamos los modulos que queramos enviar a otras clases
        ListaClientesComponent,
        clienteComponent,
    ],
    imports: [
        CommonModule,
        ProveedoresModule,
    ]
})

export class ClientesModule{

}