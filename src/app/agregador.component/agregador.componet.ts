import { Component } from '@angular/core';


@Component({
  selector: 'app-agregador',
  templateUrl: './agregador.component.html',
  styleUrls: ['./agregador.component.css']
})
export class agregadorComponent {
  titulo: string = "Primer componente";
  agregado: number = 5;
  valor: number =0;

  agregar(numero: number): void{
    this.valor  += numero
  }
  // sumar(){
  //   this.valor +=1;
  // }

  // restar(){
  //   this.valor -=1;
  // }
}