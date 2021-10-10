//import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { Validators } from '@angular/forms';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = "PRIMERA APLICACION USANDO COMPONENTES";
}


