import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaDeseosService} from "../../app/services/lista-deseos.service";

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {

  constructor(public navCtrl: NavController, private _listaDeseos: ListaDeseosService) {

  }

}
