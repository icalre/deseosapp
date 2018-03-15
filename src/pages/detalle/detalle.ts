import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {ListaDeseosService} from "../../app/services/lista-deseos.service";
import {ListaItem} from "../../app/clases";

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {

  idx: number;
  lista: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public _listaDeseos: ListaDeseosService, public alertCtrl: AlertController) {
    this.idx = this.navParams.get('idx');
    this.lista = this.navParams.get('lista');
  }

  actualizar(item : ListaItem)
  {
    item.completado = !item.completado;

    let todosMarcados = true;

    for (let item of this.lista.items){
      if(!item.completado)
      {
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseos.actulizarData();
  }

  borrarItem(){
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Esta seguro que desea eliminar esta lista.',
      buttons: [ 'Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
