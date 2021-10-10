import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { agregadorComponent } from './agregador.component/agregador.componet';
import { clienteComponent } from './clientes/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    agregadorComponent,
    clienteComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
