import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriadorPage } from '../historiador/historiador';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historiadorPage: any = HistoriadorPage;

  constructor(public navCtrl: NavController) {

  }

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(this.historiadorPage);
  }

}