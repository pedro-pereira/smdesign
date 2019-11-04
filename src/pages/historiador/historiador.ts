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
    
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    var jose = document.getElementById('jose');
    balaoDeDialogo.innerHTML = "            Art Déco é um estilo de artes visuais, arquitetura e design internacional que começou na Europa em 1910 e conheceu o seu apogeu nos anos 1920 e 1930. O art déco era criticado por correntes modernistas por seu excesso de decoração (especialmente na arquitetura e design de interiores). “beneficiava apenas os mais ricos” teve seu declínio entre 1935 e 1939.";
    jose.className = "feliz";
  }

  aplicaLayoutArtDeco() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "            O layout reforça as fortes linhas verticais, os seus ornamentos e as formas aerodinâmicas da Art Deco que refletiam os arranha-céus, carros, arte, móveis, jóias, moda e até a música da época.";
    
    

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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "      Cores como: prata, ouro, azul metálico e cinzas de carvão também representavam a riqueza e a prosperidade da época de 20. Acabamentos metálicos instantaneamente adicionam brilho, glamour e implicam luxo e riqueza."; 
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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "      A estética da tipografia Art Déco refletia grande parte das transições culturais entre as décadas de 1920 e 1940, quando máquinas, metais e trens de carga começaram a mudar o mundo. As tipografias sem serifa e geométricas são refinadas e elegantes, com maior contraste e junções abruptas."; 
   
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
    var jose = document.getElementById('jose');
    jose.className = "confuso";
    
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "      Art Nouveau foi um estilo internacional que prosperou no fim do século XIX e começo do século XX. Englobou todas as artes projetuais – arquitetura, design de mobiliário e produto, moda e artes gráficas. Uso da linha orgânica, baseada na natureza. Movimentos lineares naturais dominavam a área espacial e outras propriedades visuais.";
    
  }

  aplicaLayoutArtNoveau() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "            ";
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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "            O Art Nouveau concentra-se fortemente em cores quentes dessaturada, tudo parece desbotados e empoeirados. Quando se adiciona cores quentes mais a falta de saturação, obtém uma sensação romântica, nostálgica e sonhadora na peça.";
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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "            A tipologia Art Nouveau é estilizada, elegante e com fontes extremamente decorativas, derivadas de formas orgânicas. Incluem acabamentos decorativos, “cinturas” altas ou baixas, formas triangulares e diagonais dos caracteres, ênfase nas partes superior ou inferior e linhas transversais angulosas";
    
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
    var jose = document.getElementById('jose');
    jose.className = "surpreso";

    
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "      Bauhaus foi a primeira escola de Design do mundo, surgiu na alemanha e é uma das maiores expressões do Modernismo. Características como uma gama reduzida de cores, uso de formas geométricas claras e simples e a construção da informação visual dentro de um sistema rígido (grid) foram aplicadas a problemas funcionais e à produção mecânica dentro da escola.";
    
  }

  aplicaLayoutBauhaus() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "      No layout as formas primárias geométricas definem-se como elementos dinâmicos, bordas que são ultrapassadas e linhas firmes. ";
    
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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "      Forte uso das cores primárias e vibrantes,pois eram tomadas como ponto de partida para qualquer produção. As cores também eram representadas pelas formas primárias (vermelho = quadrado, triangulo = amarelo, azul = circulo), ";
    
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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "      A bauhaus utilizar-se de uma tipografia mais moderna, enxuta e precisa, com princípios do construtivismo. Mistura versões condensadas e expandidas de fontes góticas e sem serifa. ";
    
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
    var jose = document.getElementById('jose');
    jose.className = "explicando";

    
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "              O Pop Art surge em meados de 1950, na Inglaterra, mas alcança sua maior fama nos Estados Unidos em 1960, o movimento buscava unir a familiaridade da sociedade com a cultura de consumo e de massa. O resultado eram imagens que documentavam, ao mesmo tempo que parodiavam, imagens familiares dos Estados Unidos modernos.";
    
  }

  aplicaLayoutPopArt() {
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "              O layout traz a estética dos quadrinhos que o artista Roy Lichtenstein usava como forma de criticar a cultura de massas, o consumismo e a economia doméstica";
    
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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "              O design pop inspirava-se nas cores do arco íris, cores saturadas e contrastantes. Tons vibrantes para criar deliberadamente efeitos ópticos dissonantes.";
    
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
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "              A tipografia Pop Art geralmente eram manuscritos, posteriormente com referências ao art nouveau, até mesmo psicodélicos. Chamativa, principalmente ligada ao consumismo e a venda exagerada.";
    
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
// José Carlos mimimamedezim
desapareceBalao(){
  var opacidade = document.getElementById("balaoDeDialogo").style.opacity;
  if(opacidade !=1 && opacidade!=""){
    document.getElementById("balaoDeDialogo").style.opacity=1;
  }else{
    document.getElementById("balaoDeDialogo").style.opacity=0;
  }
}
aleatorio(){
    var balaoDeDialogo = document.getElementById('balaoDeDialogo');
    balaoDeDialogo.innerHTML = "              Hmmm, você gostou desta combinação de cores? Quais escolas você consegue consegue identificar?";
    
}
}