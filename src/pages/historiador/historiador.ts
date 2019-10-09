import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import {  FabContainer } from 'ionic-angular';

@Component({
  selector: 'page-historiador',
  templateUrl: 'historiador.html'
})

export class HistoriadorPage {

  escola1Tipografia: HTMLElement;
  escola1Layout: HTMLElement;
  escola1Cor: HTMLElement;
  escola1Acessorios: HTMLElement;

  constructor(public navCtrl: NavController) {
  }

  recuperaElementosDaPagina() {
    this.escola1Tipografia  = document.getElementById("escola1-tipografia");
    this.escola1Layout      = document.getElementById("escola1-layout");
    this.escola1Cor         = document.getElementById("escola1-cor");
    this.escola1Acessorios  = document.getElementById("escola1-acessorios");
  }

  destacaBotao(fonte: String) {
    
    this.recuperaElementosDaPagina();
    
    /*
    if(fonte === 'escola1-tipografia') {
      this.escola1Tipografia.classList.toggle('botaoNormal');
      this.escola1Layout.classList.toggle('botaoTransparente');
      this.escola1Cor.classList.toggle('botaoTransparente');
      this.escola1Acessorios.classList.toggle('botaoTransparente');
    }
    */
  }
}