import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProveedorComponent } from './proveedor/proveedor.component';




@NgModule({
  declarations: [
    ProveedorComponent,
  ],
  exports: [
    ProveedorComponent,
  ],
  imports: [
    // importar elementos como ngFor ngIF
    CommonModule,
    // importar elementos para formulario
    FormsModule,
  ]
})
export class ProveedoresModule { }
