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
import { FooterModule } from './footer/footer.module';
import { ProgressModule } from './progress/progress.module';
import { ProveedoresModule } from './proveedores/proveedores.module';

@NgModule({
  declarations: [
    AppComponent,
    agregadorComponent,
    NavbarSPAComponent,
    
    

    
    
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    FooterModule,
    ProgressModule,
    ProveedoresModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
