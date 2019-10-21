import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-historiador',
  templateUrl: 'historiador.html'
})

export class HistoriadorPage {

  escola1Tipografia: HTMLElement;
  escola1Layout: HTMLElement;
  escola1Cor: HTMLElement;
  escola1Acessorios: HTMLElement;

  caracteristicasTextuais = ['textoCorNeutro', 'textoFonteNeutro'];
  caracteristicasImageticas = ['imagemNeutro', 'layoutNeutro'];

  constructor(public navCtrl: NavController) {
  }

  acaoBotaoX() {
    alert('Botão X');
  }

  acaoBotaoY() {
    alert('Botão Y');
  }

  // -------------- ART DECO --------------
  exibeDialogoArtDeco() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.className = "balaoDeDialogoArtDeco";
  }

  aplicaCorArtDeco() {
    this.caracteristicasTextuais[0] = "textoCorArtDeco";
    var todosOsTextos = document.getElementsByClassName('texto');
    for (var i = 0; i < todosOsTextos.length; i++) {
      todosOsTextos[i].className = "texto";
      for (var j = 0; j < this.caracteristicasTextuais.length; j++) {
        todosOsTextos[i].className += " " + this.caracteristicasTextuais[j];
      }
    }

    var todosOsBotoesDeCor = document.getElementsByClassName('botaoDeCor');
    for (i = 0; i < todosOsBotoesDeCor.length; i++) {
      todosOsBotoesDeCor[i].classList.add('opacidadeBotao50');
      console.log(todosOsBotoesDeCor[i].className);
      console.log(todosOsBotoesDeCor[i].classList);

    }
    /*
    console.log('aplicaCorArtDeco');
    console.log(this.caracteristicasTextuais);
    console.log(todosOsBotoesDeCor);
    */
  }

  aplicaFonteArtDeco() {
    this.caracteristicasTextuais[1] = "textoFonteArtDeco";
    var todosOsTextos = document.getElementsByClassName('texto');
    for (var i = 0; i < todosOsTextos.length; i++) {
      todosOsTextos[i].className = "texto";
      for (var j = 0; j < this.caracteristicasTextuais.length; j++) {
        todosOsTextos[i].className += " " + this.caracteristicasTextuais[j];
      }
    }
    /*
    console.log('aplicaFonteArtDeco');
    console.log(this.caracteristicasTextuais);
    */
  }

  aplicaImagemArtDeco() {
    this.caracteristicasImageticas[0] = "imagemArtDeco";
    var todasAsImagens = document.getElementsByClassName('imagem');
    for (var i = 0; i < todasAsImagens.length; i++) {
      todasAsImagens[i].className = "imagem";
      for (var j = 0; j < this.caracteristicasImageticas.length; j++) {
        todasAsImagens[i].className += " " + this.caracteristicasImageticas[j];
      }
    }
    /*
    console.log('aplicaImagemArtDeco');
    console.log(this.caracteristicasImageticas);
    */
  }

  aplicaLayoutArtDeco() {
    this.caracteristicasImageticas[1] = "layoutArtDeco";
    var todasAsImagens = document.getElementsByClassName('imagem');
    for (var i = 0; i < todasAsImagens.length; i++) {
      todasAsImagens[i].className = "imagem";
      for (var j = 0; j < this.caracteristicasImageticas.length; j++) {
        todasAsImagens[i].className += " " + this.caracteristicasImageticas[j];
      }
    }
    /*
    console.log('aplicaLayoutArtDeco');
    console.log(this.caracteristicasImageticas);
    */
  }

  // -------------- ART NOVEAU --------------
  exibeDialogoArtNoveau() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.className = "balaoDeDialogoArtNoveau";
  }

  aplicaCorArtNoveau() {
    this.caracteristicasTextuais[0] = "textoCorArtNoveau";
    var todosOsTextos = document.getElementsByClassName('texto');
    for (var i = 0; i < todosOsTextos.length; i++) {
      todosOsTextos[i].className = "texto";
      for (var j = 0; j < this.caracteristicasTextuais.length; j++) {
        todosOsTextos[i].className += " " + this.caracteristicasTextuais[j];
      }
    }
    /*
    console.log('aplicaCorArtNoveau');
    console.log(this.caracteristicasTextuais);
    console.log(todosOsBotoesDeCor);
    */
  }

  aplicaFonteArtNoveau() {
    this.caracteristicasTextuais[1] = "textoFonteArtNoveau";
    var todosOsTextos = document.getElementsByClassName('texto');
    for (var i = 0; i < todosOsTextos.length; i++) {
      todosOsTextos[i].className = "texto";
      for (var j = 0; j < this.caracteristicasTextuais.length; j++) {
        todosOsTextos[i].className += " " + this.caracteristicasTextuais[j];
      }
    }
    /*
    console.log('aplicaFonteArtNoveau');
    console.log(this.caracteristicasTextuais);
    */
  }

  aplicaImagemArtNoveau() {
    this.caracteristicasImageticas[0] = "imagemArtNoveau";
    var todasAsImagens = document.getElementsByClassName('imagem');
    for (var i = 0; i < todasAsImagens.length; i++) {
      todasAsImagens[i].className = "imagem";
      for (var j = 0; j < this.caracteristicasImageticas.length; j++) {
        todasAsImagens[i].className += " " + this.caracteristicasImageticas[j];
      }
    }
    /*
    console.log('aplicaImagemArtNoveau');
    console.log(this.caracteristicasImageticas);
    */
  }

}