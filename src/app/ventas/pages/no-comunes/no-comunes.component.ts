import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect

  nombre: string = 'Mugui';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural

  clientes: string[] = ['Maria', 'Pedro','Fernando', 'Estefany', 'otro gato'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos clientes # esperando'
  }


  borrarCliente () {

    this.clientes.pop();

  }

  cambiarPersona () {

    this.nombre = 'Estefany';
    this.genero = 'femenino';

  }

  // keyValue Pipe

  persona = {
    nombre: 'fernando',
    edad: 35,
    direccion: 'Otawa, Canada'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async pipe

  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de la promesa');
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
  }

}
