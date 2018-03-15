import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {Lista, ListaItem} from "../../app/clases/index";
import {ListaDeseosService} from "../../app/services/lista-deseos.service";

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.html'
})
export class AgregarPage {

  nombreLista: string = '';
  nombreItem: string = '';

  items: ListaItem[] = [];


  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              public _listaDeseos: ListaDeseosService) {

  }

  agregar() {

    if (this.nombreItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);

    this.nombreItem = "";
  }

  eliminarItem(index) {
    this.items.splice(index, 1);
  }

  guardarLista() {
    if (this.nombreLista.length == 0) {

      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesario.',
        buttons: ['OK']
      });
      alert.present();

      return;
    }

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    this._listaDeseos.agregarLista(lista);

    this.navCtrl.pop();

  }

}
