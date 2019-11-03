import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GaleriaPage } from '../galeria/galeria';

@Component({
  selector: 'page-historiador',
  templateUrl: 'historiador.html'
})

export class HistoriadorPage {

  homePage: any = HomePage;
  galeriaPage: any = GaleriaPage;

  caracteristicas = ["N", "N", "N"];
  botaoDeCorAtivo = [1, 1, 1, 1];
  botaoDeTipografiaAtivo = [1, 1, 1, 1];
  botaoDeLayoutAtivo = [1, 1, 1, 1];

  constructor(public navCtrl: NavController) {

  }

  voltarPaginaInicial() {
    this.navCtrl.push(this.homePage);
  }

  acaoBotaoX() {
    alert('Botão X');
  }

  acaoBotaoY() {
    alert('Botão Y');
  }

  abrirGaleria() {
    this.navCtrl.push(this.galeriaPage);
  }

  // -------------- ART DECO --------------
  exibeDialogoArtDeco() {
    /*
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.className = "balaoDeDialogoArtDeco";
    */
  }

  aplicaLayoutArtDeco() {
    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-layout-1").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeIn
          { opacity: 1 }], 2000);
        this.caracteristicas[0] = "D";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

      }, 500);
      this.botaoDeLayoutAtivo = [1, 0, 0, 0];
      for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
        if (this.botaoDeLayoutAtivo[i] !== 1) {
          document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  aplicaCorArtDeco() {
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-cor-1").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeInut
          { opacity: 1 }], 2000);

        this.caracteristicas[1] = "D";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

      }, 500);
      this.botaoDeCorAtivo = [1, 0, 0, 0];
      for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
        if (this.botaoDeCorAtivo[i] !== 1) {
          document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  aplicaFonteArtDeco() {
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-tipografia-1").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeIn
          { opacity: 1 }], 2000);
        this.caracteristicas[2] = "D";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

      }, 500);
      this.botaoDeTipografiaAtivo = [1, 0, 0, 0];
      for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
        if (this.botaoDeTipografiaAtivo[i] !== 1) {
          document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  // -------------- ART NOVEAU --------------
  exibeDialogoArtNoveau() {
    /*
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.className = "balaoDeDialogoArtNoveau";
    */
  }

  aplicaLayoutArtNoveau() {
    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-layout-2").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeIn
          { opacity: 1 }], 2000);

        this.caracteristicas[0] = "Nv";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }
      }, 500);

      this.botaoDeLayoutAtivo = [0, 1, 0, 0];
      for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
        if (this.botaoDeLayoutAtivo[i] !== 1) {
          document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  aplicaCorArtNoveau() {
    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-cor-2").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeIn
          { opacity: 1 }], 2000);
        this.caracteristicas[1] = "Nv";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

      }, 500);
      this.botaoDeCorAtivo = [0, 1, 0, 0];
      for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
        if (this.botaoDeCorAtivo[i] !== 1) {
          document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  aplicaFonteArtNoveau() {
    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-tipografia-2").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeIn
          { opacity: 1 }], 2000);
        this.caracteristicas[2] = "Nv";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }
      }, 500);
      this.botaoDeTipografiaAtivo = [0, 1, 0, 0];
      for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
        if (this.botaoDeTipografiaAtivo[i] !== 1) {
          document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  // -------------- BAUHAUS --------------
  exibeDialogoBauhaus() {
    /*
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.className = "balaoDeDialogoBauhaus";
    */
  }

  aplicaLayoutBauhaus() {
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-layout-3").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeInut
          { opacity: 1 }], 2000);

        this.caracteristicas[0] = "B";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }
      }, 500);

      this.botaoDeLayoutAtivo = [0, 0, 1, 0];
      for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
        if (this.botaoDeLayoutAtivo[i] !== 1) {
          document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  aplicaCorBauhaus() {
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-cor-3").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeIn
          { opacity: 1 }], 2000);
        this.caracteristicas[1] = "B";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;
      }, 500);
      this.botaoDeCorAtivo = [0, 0, 1, 0];
      for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
        if (this.botaoDeCorAtivo[i] !== 1) {
          document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  aplicaFonteBauhaus() {
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-tipografia-3").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeInut
          { opacity: 1 }], 2000);
        this.caracteristicas[2] = "B";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }
      }, 500);

      this.botaoDeTipografiaAtivo = [0, 0, 1, 0];
      for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
        if (this.botaoDeTipografiaAtivo[i] !== 1) {
          document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  // -------------- POP ART --------------
  exibeDialogoPopArt() {
    /*
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.className = "balaoDeDialogoPopArt";
    */
  }

  aplicaLayoutPopArt() {
    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-layout-4").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeIn
          { opacity: 1 }], 2000);
        this.caracteristicas[0] = "P";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

      }, 500);
      this.botaoDeLayoutAtivo = [0, 0, 0, 1];
      for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
        if (this.botaoDeLayoutAtivo[i] !== 1) {
          document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  aplicaCorPopArt() {
    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-cor-4").style.opacity != "1") {
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeIn
          { opacity: 1 }], 2000);

        this.caracteristicas[1] = "P";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;
      }, 500);
      this.botaoDeCorAtivo = [0, 0, 0, 1];
      for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
        if (this.botaoDeCorAtivo[i] !== 1) {
          document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
    }
  }

  aplicaFontePopArt() {
    // Linha abaixo não permite que usuário ifclique em botão já clicado(document.getElementById("escola-tipografia-4").style.opacity!=1)
    // Linha abaixo só permite clicar quando não já está clicado
      document.getElementById("objetoDeEstudo").animate([
        { opacity: 1 },
        // Tempo de fadeOut
        { opacity: 0 }], 500);
      // Timeout para que a tela só mude quando a opacidade esteja em 0 
      setTimeout(() => {

        document.getElementById("objetoDeEstudo").animate([
          { opacity: 0 },
          // Tempo de fadeInut
          { opacity: 1 }], 2000);

        this.caracteristicas[2] = "P";
        var objetoDeEstudo = document.getElementById('objetoDeEstudo');
        var sufixo = "";

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }

        objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;

        for (var i = 0; i < this.caracteristicas.length; i++) {
          sufixo += this.caracteristicas[i];
        }
      }, 500);

      this.botaoDeTipografiaAtivo = [0, 0, 0, 1];
      for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
        if (this.botaoDeTipografiaAtivo[i] !== 1) {
          document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
        } else {
          document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
        }
      }
  }
}