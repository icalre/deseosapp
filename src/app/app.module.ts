import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PendientesPage} from "../pages/pendientes/pendientes";
import {TerminadosPage} from "../pages/terminados/terminados";
import {ListaDeseosService} from "./services/lista-deseos.service";
import {AgregarPage} from "../pages/agregar/agregar";
import {PlaceholderPipe} from "./pipes/placeholder.pipe";
import {DetallePage} from "../pages/detalle/detalle";
import {PendientesPipe} from "./pipes/pendientes.pipe";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    DetallePage,
    PlaceholderPipe,
    PendientesPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
