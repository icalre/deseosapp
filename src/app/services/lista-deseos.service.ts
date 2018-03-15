import {Injectable} from "@angular/core";
import {Lista} from "../clases/lista";

@Injectable()

export class ListaDeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarData();
  }

  actulizarData(){
    localStorage.setItem("data", JSON.stringify(this.listas));
  }


  cargarData(){
    if(JSON.parse(localStorage.getItem('data'))){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  agregarLista(lista:Lista)
  {
    this.listas.push(lista);
    this.actulizarData();
  }


  eliminarLista(idx: number)
  {
    this.listas.splice(idx,1);
    this.actulizarData();
  }

}
