import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
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
  bonecoAcordado = true;
  primeiroClique = true;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  selecionaTodosOsBotoes(comando) {
    if (comando) {
      for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
        document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
      }

      for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
        document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
      }

      for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
        document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
      }
    } else {
      for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
        document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
      }

      for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
        document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
      }

      for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
        document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
      }
    }
  }

  ionViewDidLoad() {
    this.carregaLayoutNormal();
    // document.getElementById("balaoDeDialogo").style.opacity = "0";
    // this.desselecionaBotoes();
  }

  voltarPaginaInicial() {
    this.navCtrl.setRoot(this.homePage);
  }

  abrirGaleria() {
    this.navCtrl.setRoot(this.galeriaPage);
  }

  carregaLayoutNormal() {
    // this.desselecionaBotoes();
    this.caracteristicas[0] = "N";
    this.caracteristicas[1] = "N";
    this.caracteristicas[2] = "N";
    var objetoDeEstudo = document.getElementById("imagem1");
    var novoObjetoDeEstudo = document.getElementById("imagem2");
    var sufixo = "";

    for (var i = 0; i < this.caracteristicas.length; i++) {
      sufixo += this.caracteristicas[i];
    }

    objetoDeEstudo.className = sufixo;
    novoObjetoDeEstudo.className = sufixo;

    if (this.bonecoAcordado) {
      var balaoDeDialogo = document.getElementById('balaoDeDialogo');
      balaoDeDialogo.style.opacity = "1";
      balaoDeDialogo.innerHTML =
        "Olá! Eu sou José. Estou aqui para te ajudar a entender melhor as mudanças que ocorrerão na tela conforme você for alterando a tipografia, a cor ou o layout. Vamos lá?";
    }
  }

  // -------------- ART DECO --------------
  exibeDialogoArtDeco() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML =
      "Art Déco é um estilo de artes visuais, arquitetura e design internacional que começou na Europa, em 1910, e teve o seu apogeu entre os anos 1920 e 1930. O Art Déco era criticado por correntes modernistas por seu excesso de decoração. Por conta disso, acabava beneficiando os mais ricos. Teve seu declínio entre os anos de 1935 e 1939.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
      var jose = document.getElementById('jose');
      jose.className = "jose feliz";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }
  }

  aplicaLayoutArtDeco() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML =
      "O layout reforça as fortes linhas verticais, os seus ornamentos e as formas aerodinâmicas da Art Deco, que refletiam os arranha-céus, carros, arte, móveis, jóias, moda e até a música da época.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    balaoDeDialogo.innerHTML =
      "Cores como prata, ouro, azul metálico e cinzas de carvão também representavam a riqueza e a prosperidade da década de 20. Acabamentos metálicos adicionam brilho, glamour e implicam em luxo e riqueza.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    balaoDeDialogo.innerHTML =
      "A estética da tipografia Art Déco refletia grande parte das transições culturais entre as décadas de 1920 e 1940, quando máquinas, metais e trens de carga começaram a mudar o mundo. As tipografias sem serifa e geométricas são refinadas e elegantes, com maior contraste e junções abruptas.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML =
      "Art Nouveau foi um estilo internacional que prosperou no fim do século XIX e começo do século XX. Englobou todas as artes projetuais – arquitetura, design de mobiliário e produto, moda e artes gráficas. Uso da linha orgânica, baseada na natureza. Movimentos lineares naturais dominavam a área espacial e outras propriedades visuais.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
      var jose = document.getElementById('jose');
      jose.className = "jose confuso";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }
  }

  aplicaLayoutArtNoveau() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "O layout Art Nouveau caracteriza-se pelo uso de ornamentos florais, traçados curvilíneos com fortes contornos como numa moldura. As flores, os arcos, as formas da natureza trazem a ideia de movimento às obras.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    balaoDeDialogo.innerHTML =
      "O Art Nouveau concentra-se fortemente em cores quentes e dessaturadas, dando um ar de desbotado, empoeirado. Quando se adiciona cores quentes, por conta da falta de saturação, obtém-se um efeito romântico, nostálgico, sonhador.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

    // Linha abaixo não permite que usuário clique em botão já clicado
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
    balaoDeDialogo.innerHTML =
      "A tipologia Art Nouveau é estilizada, elegante e com fontes extremamente decorativas, derivadas de formas orgânicas. Incluem acabamentos decorativos, “cinturas” altas ou baixas, formas triangulares e diagonais dos caracteres, ênfase nas partes superior ou inferior e linhas transversais angulosas";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML =
      "Bauhaus foi a primeira escola de Design do mundo. Ela surgiu na Alemanha e é uma das maiores expressões do Modernismo. Características como um leque reduzido de cores, uso de formas geométricas claras e simples e construção da informação visual dentro de um sistema rígido (grid) foram aplicadas a problemas funcionais e à produção mecânica dentro da escola.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
      var jose = document.getElementById('jose');
      jose.className = "jose surpreso";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }
  }

  aplicaLayoutBauhaus() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML =
      "No layout as formas primárias geométricas definem-se como elementos dinâmicos, bordas que são ultrapassadas e linhas firmes.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    balaoDeDialogo.innerHTML =
      "Forte uso das cores primárias e vibrantes eram tomadas como ponto de partida para qualquer produção. As cores também eram representadas pelas formas primárias (vermelho = quadrado, triângulo = amarelo, azul = circulo).";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    balaoDeDialogo.innerHTML =
      "A Bauhaus utiliza de uma tipografia mais moderna, enxuta e precisa, com princípios do construtivismo. Mistura versões condensadas e expandidas de fontes góticas e sem serifa.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML =
      "O Pop Art surge em meados de 1950, na Inglaterra, mas alcança sua maior fama nos Estados Unidos em 1960. O movimento buscava unir a familiaridade da sociedade com a cultura de consumo e de massa. O resultado eram imagens que documentavam, ao mesmo tempo que parodiavam, conceitos familiares dos Estados Unidos modernos.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
      var jose = document.getElementById('jose');
      jose.className = "jose explicando";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }
  }

  aplicaLayoutPopArt() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML =
      "O layout traz a estética dos quadrinhos que o artista Roy Lichtenstein usava como uma forma de criticar a cultura de massas, o consumismo e a economia doméstica.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    balaoDeDialogo.innerHTML =
      "O design pop inspirava-se nas cores do arco íris: saturadas e contrastantes. Tons vibrantes para criar deliberadamente efeitos ópticos dissonantes.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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
    balaoDeDialogo.innerHTML =
      "A tipografia Pop Art geralmente eram manuscritos, posteriormente com referências ao Art Nouveau, até mesmo psicodélicos. Chamativa, principalmente ligada ao consumismo e à venda exagerada.";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

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

  // Personagem parceiro do discurso
  desapareceBalao() {
    if (document.getElementById("balaoDeDialogo").innerHTML.trim() != "") {
      this.bonecoAcordado = !this.bonecoAcordado;
      if (!this.bonecoAcordado) {
        var jose = document.getElementById('jose');
        jose.className = "jose dormindo";

        var opacidade = document.getElementById("balaoDeDialogo").style.opacity;
        if (opacidade != "1" && opacidade != "") {
          document.getElementById("balaoDeDialogo").style.opacity = "1";
        } else {
          document.getElementById("balaoDeDialogo").style.opacity = "0";
        }
      } else {
        var jose = document.getElementById('jose');
        jose.className = "jose explicando";
        var opacidade = document.getElementById("balaoDeDialogo").style.opacity;
        if (opacidade != "1" && opacidade != "") {
          document.getElementById("balaoDeDialogo").style.opacity = "1";
        } else {
          document.getElementById("balaoDeDialogo").style.opacity = "0";
        }
      }
    }
  }

  geraModoAleatorio() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML =
      "Hmmm, você gostou desta combinação de cores? Quais escolas você consegue consegue identificar?";

    if (this.bonecoAcordado) {
      balaoDeDialogo.style.opacity = "1";
      var jose = document.getElementById('jose');
      jose.className = "jose confuso";
    } else {
      balaoDeDialogo.style.opacity = "0";
    }

    if (this.primeiroClique) {
      this.primeiroClique = false;
      this.selecionaTodosOsBotoes(false);
    }

    var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
    var escolas = ["D", "Nv", "B", "P"];

    var escolaEscolhida;
    for (var i = 0; i < 3; i++) {
      escolaEscolhida = Math.floor(Math.random() * 4);
      this.caracteristicas[i] = escolas[escolaEscolhida];
    }

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

    switch (this.caracteristicas[0]) {
      case "D":
        this.botaoDeLayoutAtivo = [1, 0, 0, 0];
        break;
      case "Nv":
        this.botaoDeLayoutAtivo = [0, 1, 0, 0];
        break;
      case "B":
        this.botaoDeLayoutAtivo = [0, 0, 1, 0];
        break;
      case "P":
        this.botaoDeLayoutAtivo = [0, 0, 0, 1];
        break;
    }

    switch (this.caracteristicas[1]) {
      case "D":
        this.botaoDeCorAtivo = [1, 0, 0, 0];
        break;
      case "Nv":
        this.botaoDeCorAtivo = [0, 1, 0, 0];
        break;
      case "B":
        this.botaoDeCorAtivo = [0, 0, 1, 0];
        break;
      case "P":
        this.botaoDeCorAtivo = [0, 0, 0, 1];
        break;
    }

    switch (this.caracteristicas[2]) {
      case "D":
        this.botaoDeTipografiaAtivo = [1, 0, 0, 0];
        break;
      case "Nv":
        this.botaoDeTipografiaAtivo = [0, 1, 0, 0];
        break;
      case "B":
        this.botaoDeTipografiaAtivo = [0, 0, 1, 0];
        break;
      case "P":
        this.botaoDeTipografiaAtivo = [0, 0, 0, 1];
        break;
    }

    for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
      if (this.botaoDeCorAtivo[i] !== 1) {
        document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
      } else {
        document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
      }
    }

    for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
      if (this.botaoDeTipografiaAtivo[i] !== 1) {
        document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
      } else {
        document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
      }
    }

    for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
      if (this.botaoDeLayoutAtivo[i] !== 1) {
        document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
      } else {
        document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
      }
    }
  }

  fadeIn(element, time) {
    if (element.style.opacity == 0 || element.style.opacity == 1) {
      this.processa(element, time, 0, 100);
    }
  }

  fadeOut(element, time) {
    if (element.style.opacity == 0 || element.style.opacity == 1) {
      this.processa(element, time, 100, 0);

    }
  }

  processa(element, time, initial, end) {
    var increment, opc, intervalo;
    if (initial == 0) {
      increment = 2;
      element.style.display = "block";
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

  recarregaAplicacao() {
    const confirm = this.alertCtrl.create({
      title: 'Reiniciar o infográfico?',
      message: 'Tem certeza que deseja reiniciar o visual do infográfico?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.carregaLayoutNormal();
            this.selecionaTodosOsBotoes(true);
            this.primeiroClique = true;
          }
        }
      ]
    });
    confirm.present();
  }

  /*
  girarPersonagem(personagem) {
    if (this.bonecoAcordado) {
      var degrees = 0;
      personagem.onclick = function () {
        degrees += 1800;
        personagem.style.webkitTransform = "rotateY(" + degrees + "deg) scale(0.3)";
        personagem.style.transform = "rotateY(" + degrees + "deg) scale(0.3)";
      }
    }
  }
  */
}
