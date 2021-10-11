import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUpComponent } from './follow-up/follow-up.component';



@NgModule({
  declarations: [
    FollowUpComponent
  ],
  exports: [
    //agregamos los modulos que queramos enviar a otras clases
    FollowUpComponent
],
  imports: [
    CommonModule
  ]
})
export class ProgressModule { }
