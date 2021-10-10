import { Component } from '@angular/core';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class clienteComponent {
  nombre: string = "Rodrigo Yturriaga";
  edad: number = 22;

  recibirDatos(): string{
    return `Nombre: ${this.nombre.toUpperCase()} \nEdad:  ${this.edad.toString()}`
    
  }

  get nombreMinusculas(): string{
    return this.nombre.toLowerCase();
  }

  cambiarNombre(): string{
    return `Nombre: ${this.nombre = "Diego Yturriaga"}` 
  }

  cambiarEdad(): string{
    return `Edad:  ${this.edad = 15}`
    
  }
}
