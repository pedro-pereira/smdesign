import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriadorPage } from '../historiador/historiador';

@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html'
})

export class GaleriaPage {

  historiadorPage: any = HistoriadorPage;

  constructor(public navCtrl: NavController) {

  }

  // Função para voltar para a tela de "estudo" do infográfico
  voltarPaginaHistoriador() {
    this.navCtrl.setRoot(this.historiadorPage);
  }

  // Variável que armazena as referências das imagens da galeria
  slides = [
    { image: "assets/imgs/galeria/galeria-1.png" },
    { image: "assets/imgs/galeria/galeria-2.png" },
    { image: "assets/imgs/galeria/galeria-3.png" },
    { image: "assets/imgs/galeria/galeria-4.png" },
    { image: "assets/imgs/galeria/galeria-5.png" },
    { image: "assets/imgs/galeria/galeria-6.png" },
    { image: "assets/imgs/galeria/galeria-7.png" },
    { image: "assets/imgs/galeria/galeria-8.png" }
  ];
}