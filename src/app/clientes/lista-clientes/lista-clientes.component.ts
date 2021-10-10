import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: string[] = 
  [
    "Rodrigo Y.A",
    "Diego Y.A",
    "Alvaro Y.A",
    "Enrique De La Vega.A"
  ];

  //ejecucion automatica cuando se ejecuta un "OnInit"
  ngOnInit(): void {
    console.log("Hola desde init");
  }

  //los constructores son de ejecucion automatica
  constructor(){
    
  }

  clienteEliminado: string = "";

  agregarClientes(): void{
    this.clientes.push("Nohemi A.P")
  }

  eliminarCliente(): void{
    this.clienteEliminado = this.clientes.pop() || ""

  }



}
