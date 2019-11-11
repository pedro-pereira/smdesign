import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriadorPage } from '../historiador/historiador';
import { CreditosPage } from '../creditos/creditos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historiadorPage: any = HistoriadorPage;
  creditosPage: any = CreditosPage;

  constructor(public navCtrl: NavController) {

  }

  abrirAplicacao() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(this.historiadorPage);
  }

  abrirPaginaCreditos() {
    this.navCtrl.push(this.creditosPage);
  }

}