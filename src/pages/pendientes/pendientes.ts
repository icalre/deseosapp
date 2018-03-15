import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaDeseosService} from "../../app/services/lista-deseos.service";
import {AgregarPage} from "../agregar/agregar";
import {DetallePage} from "../detalle/detalle";

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {

  constructor(public navCtrl: NavController, private _listaDeseos: ListaDeseosService) {

  }


  irAgregar(){
    this.navCtrl.push(AgregarPage);
  }

  verDetalle(lista, idx){
    this.navCtrl.push(DetallePage, {
      lista, idx
    });
  }

}
