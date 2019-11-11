import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-creditos',
  templateUrl: 'creditos.html'
})

export class CreditosPage {

  homePage: any = HomePage;

  constructor(public navCtrl: NavController) {
  }

  voltarPaginaInicial() {
    this.navCtrl.push(this.homePage);
  }

}