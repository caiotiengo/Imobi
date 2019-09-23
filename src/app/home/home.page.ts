import { Component } from '@angular/core';
import {CargaService} from '../carga.service';
import {NavController} from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor (public carga: CargaService, private router: Router, public navCtrl: NavController) {

  }

  goImovel() {
      this.navCtrl.navigateBack('/lista-imoveis');

  }
  goSeguros() {
    this.navCtrl.navigateBack('/entrar-seguro');
  }
  goCorretagem() {
    this.navCtrl.navigateBack('/entrar-corretagem');
  }
  goImobi() {
    this.navCtrl.navigateBack('/entrar-imobi');
  }
}
