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

  // caracteristicas[layout, cor, tipografia]
  caracteristicas = ["N", "N", "N"];
  botaoDeCorAtivo = [1, 1, 1, 1];
  botaoDeTipografiaAtivo = [1, 1, 1, 1];
  botaoDeLayoutAtivo = [1, 1, 1, 1];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.carregaLayoutNormal();
    document.getElementById("balaoDeDialogo").style.opacity = "0";
  }

  voltarPaginaInicial() {
    this.navCtrl.push(this.homePage);
  }

  abrirGaleria() {
    this.navCtrl.push(this.galeriaPage);
  }

  carregaLayoutNormal() {
    this.caracteristicas[0] = "N";
    this.caracteristicas[1] = "N";
    this.caracteristicas[2] = "N";
    var objetoDeEstudo = document.getElementById("imagem1");
    var sufixo = "";

    for (var i = 0; i < this.caracteristicas.length; i++) {
      sufixo += this.caracteristicas[i];
    }

    objetoDeEstudo.className = sufixo;

    document.getElementById("balaoDeDialogo").style.opacity = "0";
  }

  // -------------- ART DECO --------------
  exibeDialogoArtDeco() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    var jose = document.getElementById('jose');
    balaoDeDialogo.innerHTML =
      "Art Déco é um estilo de artes visuais, arquitetura e design internacional que começou na Europa, em 1910, e teve o seu apogeu entre os anos 1920 e 1930. O Art Déco era criticado por correntes modernistas por seu excesso de decoração. Por conta disso, acabava beneficiando os mais ricos. Teve seu declínio entre os anos de 1935 e 1939.";
    jose.className = "jose feliz";



var degrees = 0;
jose.onclick = function() {
  degrees += 1800;
  jose.style.webkitTransform = "rotateY(" + degrees + "deg) scale(0.3)";
  jose.style.transform = "rotateY(" + degrees + "deg) scale(0.3)";
}


  }

  fadeIn(element, time) {
    this.processa(element, time, 0, 100);
  }

  fadeOut(element, time) {
    this.processa(element, time, 100, 0);
  }

  processa(element, time, initial, end) {
    var increment, opc, intervalo;
    if (initial == 0) {
      increment = 2;
      //element.style.display = "block";
    } else {
      increment = -2;
    }

    opc = initial;

    intervalo = setInterval(function () {
      if ((opc == end)) {
        if (end == 0) {
          element.style.display = "block";
        }
        clearInterval(intervalo);
      } else {
        opc += increment;
        element.style.opacity = opc / 100;
        element.style.filter = "alpha(opacity=" + opc + ")";
      }
    }, time * 50);
  }

  aplicaLayoutArtDeco() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "O layout reforça as fortes linhas verticais, os seus ornamentos e as formas aerodinâmicas da Art Deco, que refletiam os arranha-céus, carros, arte, móveis, jóias, moda e até a música da época.";

    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-layout-1").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[0] = "D";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "Cores como prata, ouro, azul metálico e cinzas de carvão também representavam a riqueza e a prosperidade da década de 20. Acabamentos metálicos adicionam brilho, glamour e implicam em luxo e riqueza.";

    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-cor-1").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[1] = "D";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "A estética da tipografia Art Déco refletia grande parte das transições culturais entre as décadas de 1920 e 1940, quando máquinas, metais e trens de carga começaram a mudar o mundo. As tipografias sem serifa e geométricas são refinadas e elegantes, com maior contraste e junções abruptas.";

    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-tipografia-1").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[2] = "D";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var jose = document.getElementById('jose');
    jose.className = "jose confuso";

    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "Art Nouveau foi um estilo internacional que prosperou no fim do século XIX e começo do século XX. Englobou todas as artes projetuais – arquitetura, design de mobiliário e produto, moda e artes gráficas. Uso da linha orgânica, baseada na natureza. Movimentos lineares naturais dominavam a área espacial e outras propriedades visuais.";
  }

  aplicaLayoutArtNoveau() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "            ";

    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-layout-2").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[0] = "Nv";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "O Art Nouveau concentra-se fortemente em cores quentes e dessaturadas, dando um ar de desbotado, empoeirado. Quando se adiciona cores quentes, por conta da falta de saturação, obtém-se um efeito romântico, nostálgico, sonhador.";

    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-cor-2").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[1] = "Nv";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "A tipologia Art Nouveau é estilizada, elegante e com fontes extremamente decorativas, derivadas de formas orgânicas. Incluem acabamentos decorativos, “cinturas” altas ou baixas, formas triangulares e diagonais dos caracteres, ênfase nas partes superior ou inferior e linhas transversais angulosas";

    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-tipografia-2").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[2] = "Nv";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var jose = document.getElementById('jose');
    jose.className = "jose surpreso";

    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "Bauhaus foi a primeira escola de Design do mundo. Ela surgiu na Alemanha e é uma das maiores expressões do Modernismo. Características como um leque reduzido de cores, uso de formas geométricas claras e simples e construção da informação visual dentro de um sistema rígido (grid) foram aplicadas a problemas funcionais e à produção mecânica dentro da escola.";
  }

  aplicaLayoutBauhaus() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "No layout as formas primárias geométricas definem-se como elementos dinâmicos, bordas que são ultrapassadas e linhas firmes.";

    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-layout-3").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[0] = "B";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "Forte uso das cores primárias e vibrantes eram tomadas como ponto de partida para qualquer produção. As cores também eram representadas pelas formas primárias (vermelho = quadrado, triângulo = amarelo, azul = circulo).";

    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-cor-3").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[1] = "B";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "A Bauhaus utiliza de uma tipografia mais moderna, enxuta e precisa, com princípios do construtivismo. Mistura versões condensadas e expandidas de fontes góticas e sem serifa.";

    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-tipografia-3").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[2] = "B";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var jose = document.getElementById('jose');
    jose.className = "jose explicando";

    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "O Pop Art surge em meados de 1950, na Inglaterra, mas alcança sua maior fama nos Estados Unidos em 1960. O movimento buscava unir a familiaridade da sociedade com a cultura de consumo e de massa. O resultado eram imagens que documentavam, ao mesmo tempo que parodiavam, conceitos familiares dos Estados Unidos modernos.";
  }

  aplicaLayoutPopArt() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "O layout traz a estética dos quadrinhos que o artista Roy Lichtenstein usava como uma forma de criticar a cultura de massas, o consumismo e a economia doméstica.";

    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-layout-4").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[0] = "P";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "O design pop inspirava-se nas cores do arco íris: saturadas e contrastantes. Tons vibrantes para criar deliberadamente efeitos ópticos dissonantes.";

    // Linha abaixo não permite que usuário clique em botão já clicado
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-cor-4").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[1] = "P";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "A tipografia Pop Art geralmente eram manuscritos, posteriormente com referências ao Art Nouveau, até mesmo psicodélicos. Chamativa, principalmente ligada ao consumismo e à venda exagerada.";

    // Linha abaixo não permite que usuário ifclique em botão já clicado(document.getElementById("escola-tipografia-4").style.opacity!=1)
    // Linha abaixo só permite clicar quando não já está clicado
    if (document.getElementById("escola-tipografia-4").style.opacity != "1") {
      var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];

      this.caracteristicas[2] = "P";
      var sufixo = "";

      for (var i = 0; i < this.caracteristicas.length; i++) {
        sufixo += this.caracteristicas[i];
      }

      var velhoObjetoDeEstudo = document.getElementById("imagem1");
      velhoObjetoDeEstudo.className = classeAntiga;

      var novoObjetoDeEstudo = document.getElementById("imagem2");
      novoObjetoDeEstudo.className = sufixo;
      novoObjetoDeEstudo.style.position = "relative";
      novoObjetoDeEstudo.style.left = "-982px";

      this.fadeOut(velhoObjetoDeEstudo, 1);
      this.fadeIn(novoObjetoDeEstudo, 1);

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

  // José Carlos mimimamedezim
  desapareceBalao() {
    var opacidade = document.getElementById("balaoDeDialogo").style.opacity;
    if (opacidade != "1" && opacidade != "") {
      document.getElementById("balaoDeDialogo").style.opacity = "1";
    } else {
      document.getElementById("balaoDeDialogo").style.opacity = "0";
    }
  }

  geraModoAleatorio() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.style.opacity = "1";
    balaoDeDialogo.innerHTML =
      "Hmmm, você gostou desta combinação de cores? Quais escolas você consegue consegue identificar?";

    var escolas = ["D", "Nv", "B", "P", "N"];

    var escolaEscolhida;
    for (var i = 0; i < 3; i++) {
      escolaEscolhida = Math.floor(Math.random() * 5);
      this.caracteristicas[i] = escolas[escolaEscolhida];
    }

    var objetoDeEstudo = document.getElementById('objetoDeEstudo');
    var sufixo = "";

    for (var i = 0; i < this.caracteristicas.length; i++) {
      sufixo += this.caracteristicas[i];
    }

    objetoDeEstudo.className = "objetoDeEstudo flex-container" + " " + sufixo;
  }

}