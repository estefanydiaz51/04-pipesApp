import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'estefany';
  nombreUpper: string = 'ESTEFANY';
  nombreCompleto: string = 'esteFANy DiAz';
  fecha: Date = new Date(); // el dia de hoy

  

}
