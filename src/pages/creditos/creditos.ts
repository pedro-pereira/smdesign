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

  // Função para voltar para a tela inicial do infográfico
  voltarPaginaInicial() {
    this.navCtrl.push(this.homePage);
  }

}