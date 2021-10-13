import { Component, OnInit } from '@angular/core';



interface SeguimientoRefresh{
  dateR: string,
  priceR: number,
  discountR: number,
  detailR: string,
}

interface SeguimientoUser{
  room: string,
  totalPrice: number,
  totalRestaurant: number,
  userName: string,
  seguimiento: [
    dateR: string,
    priceR: number,
    discountR: number,
    detailR: string,
    
  ],
}





@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css']
})
export class FollowUpComponent implements OnInit {
  tituloF: string = "Primer componente";
  constructor() { }

  ngOnInit(): void {
    console.table(this.FollowUpData)
  }

  // FollowUpData2: SeguimientoRefresh ={
  //   dateR: "10/10/2021",
  //   priceR: 20,
  //   discountR: 0,
  //   detailR: "Almuerzo en el restaurante",
  // }

  FollowUpData: SeguimientoUser = {
    room: "103",
    totalPrice: 1500,
    totalRestaurant: 20,
    userName: "Rodrigo Aguirre",
    seguimiento: [
      "10/10/2021",
      20,
      0,
      "Almuerzo en el restaurante",
    ]
  }




  

  


}
