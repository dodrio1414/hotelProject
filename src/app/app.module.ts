import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { agregadorComponent } from './agregador.component/agregador.componet';
import { clienteComponent } from './clientes/cliente/cliente.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    agregadorComponent,
    clienteComponent,
    ListaClientesComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
