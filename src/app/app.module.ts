import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { agregadorComponent } from './agregador.component/agregador.componet';
//import { clienteComponent } from './clientes/cliente/cliente.component';
//import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { ClientesModule } from './clientes/clientes.module';
import { NavbarSPAComponent } from './navbar/navbar-spa/navbar-spa.component';
import { FollowUpComponent } from './progress/follow-up/follow-up.component';
import { FooterContentComponent } from './footer/footer-content/footer-content.component';

@NgModule({
  declarations: [
    AppComponent,
    agregadorComponent,
    NavbarSPAComponent,
    FollowUpComponent,
    FooterContentComponent,

    
    
  ],
  imports: [
    BrowserModule,
    ClientesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
