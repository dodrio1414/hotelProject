import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContentComponent } from './footer-content/footer-content.component';



@NgModule({
  declarations: [
    FooterContentComponent
  ],
  exports: [
    //agregamos los modulos que queramos enviar a otras clases
    FooterContentComponent,
],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
