import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaDeseosService} from "../../app/services/lista-deseos.service";
import {DetallePage} from "../detalle/detalle";

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.html'
})
export class TerminadosPage {

  constructor(public navCtrl: NavController, private _listaDeseos: ListaDeseosService) {

  }

  verDetalle(lista, idx){
    this.navCtrl.push(DetallePage, {
      lista, idx
    });
  }

}
